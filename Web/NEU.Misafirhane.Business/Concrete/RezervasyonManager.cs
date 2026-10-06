using DataAccess.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;
using NEU.Misafirhane.Entities.Concrete;
using NEU.Misafirhane.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AutoMapper;

namespace NEU.Misafirhane.Business.Concrete
{
    public class RezervasyonManager : IRezervasyonService
    {
        private readonly Context _context;
        private readonly int _maksIleriGun;

        private readonly IRezervasyonDal _rezervasyonDal;

        private readonly IMapper _mapper;

        public RezervasyonManager(Context context, IConfiguration configuration, IRezervasyonDal rezervasyonDal, IMapper mapper)
        {
            _context = context;
            _rezervasyonDal = rezervasyonDal;
            _mapper = mapper;
            _maksIleriGun = int.TryParse(configuration[AyarAnahtarlari.MaksIleriGun], out var gun)
                ? gun
                : AyarAnahtarlari.VarsayilanMaksIleriGun;
        }

        public async Task<IDataResult<List<MusaitOdaDto>>> MusaitOdalariGetirAsync(OdaAramaDto arama)
        {
            var bugun = DateOnly.FromDateTime(DateTime.Today);

            var tarihKontrol = TarihleriDogrula(arama.GirisTarihi, arama.CikisTarihi, arama.KisiSayisi);
            if (!tarihKontrol.Success)
                return new ErrorDataResult<List<MusaitOdaDto>>(tarihKontrol.Message);
            var giris = arama.GirisTarihi;
            var cikis = arama.CikisTarihi;

            var odalar = await _context.Odalar
                .AsNoTracking()
                .Where(o => o.AktifMi)
                .Include(o => o.OdaTipi)
                .Include(o => o.Yataklar)
                .OrderBy(o => o.OdaNo)
                .ToListAsync();

            var dolular = await _context.Rezervasyonlar
                .AsNoTracking()
                .Where(r => r.Durum == RezervasyonDurumu.Aktif && r.GirisTarihi < cikis && r.CikisTarihi > giris)
                .Select(r => new { r.OdaId, r.YatakId })
                .ToListAsync();

            var kapaliOdaIdleri = (await _context.OdaKapatmalari
                .AsNoTracking()
                .Where(k => k.BaslangicTarihi < cikis && k.BitisTarihi >= giris)
                .Select(k => k.OdaId)
                .Distinct()
                .ToListAsync()).ToHashSet();

            var sonuc = new List<MusaitOdaDto>();

            foreach (var oda in odalar)
            {
                if (kapaliOdaIdleri.Contains(oda.Id)) continue;

                var odaDolulari = dolular.Where(d => d.OdaId == oda.Id).ToList();
                var tumOdaRezervasyonuVar = odaDolulari.Any(d => d.YatakId == null);
                var doluYatakIdleri = odaDolulari
                    .Where(d => d.YatakId != null)
                    .Select(d => d.YatakId.Value)
                    .ToHashSet();

                var tumOdaMusait = odaDolulari.Count == 0
                    && arama.KisiSayisi <= oda.NormalKapasite + oda.MaksEkYatak;

                var musaitYataklar = tumOdaRezervasyonuVar
                    ? new List<MusaitYatakDto>()
                    : _mapper.Map<List<MusaitYatakDto>>(
                        oda.Yataklar.Where(y => !doluYatakIdleri.Contains(y.Id)).OrderBy(y => y.YatakNo).ToList());

                if (!tumOdaMusait && musaitYataklar.Count == 0) continue;

                var dto = _mapper.Map<MusaitOdaDto>(oda);
                dto.TumOdaMusait = tumOdaMusait;
                dto.EkYatakGerekli = Math.Max(0, arama.KisiSayisi - oda.NormalKapasite);
                dto.MusaitYataklar = musaitYataklar;

                sonuc.Add(dto);
            }

            return new SuccessDataResult<List<MusaitOdaDto>>(sonuc, Messages.MusaitOdalarGetirildi, sonuc.Count);
        }

        private IResult TarihleriDogrula(DateOnly giris, DateOnly cikis, int kisiSayisi)
        {
            var bugun = DateOnly.FromDateTime(DateTime.Today);

            if (giris < bugun)
                return new ErrorResult(Messages.GirisTarihiGecmiste);
            if (cikis <= giris)
                return new ErrorResult(Messages.CikisTarihiGiristenSonraOlmali);
            if (giris > bugun.AddDays(_maksIleriGun))
                return new ErrorResult(string.Format(Messages.GirisTarihiCokIleride, _maksIleriGun));
            if (kisiSayisi < 1)
                return new ErrorResult(Messages.KisiSayisiGecersiz);

            return new SuccessResult();
        }

        public async Task<IDataResult<RezervasyonSonucDto>> RezervasyonOlusturAsync(RezervasyonOlusturDto dto)
        {
            var tarihKontrol = TarihleriDogrula(dto.GirisTarihi, dto.CikisTarihi, dto.Misafirler.Count);
            if (!tarihKontrol.Success)
                return new ErrorDataResult<RezervasyonSonucDto>(tarihKontrol.Message);

            if (dto.Misafirler.Any(m => m.TcKimlikNo.Length != 11 || !m.TcKimlikNo.All(char.IsDigit)))
                return new ErrorDataResult<RezervasyonSonucDto>(Messages.TcKimlikGecersiz);

            var oda = await _context.Odalar
                .Include(o => o.OdaTipi)
                .Include(o => o.Yataklar)
                .FirstOrDefaultAsync(o => o.Id == dto.OdaId && o.AktifMi);
            if (oda == null)
                return new ErrorDataResult<RezervasyonSonucDto>(Messages.SeciliYerMusaitDegil);

            if (dto.KiralamaTipi == KiralamaTipi.Yatak)
            {
                if (dto.YatakId == null)
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.YatakKiralamaOdaIcermez);
                if (!oda.Yataklar.Any(y => y.Id == dto.YatakId))
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.YatakOdayaAitDegil);
                if (dto.EkYatakSayisi != 0 || dto.Misafirler.Count != 1)
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.YatakKiralamaOdaIcermez);
            }
            else
            {
                if (dto.YatakId != null)
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.OdaKiralamadaYatakIstenmez);
                if (dto.EkYatakSayisi > oda.MaksEkYatak)
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.EkYatakSiniriAsildi);
                if (dto.Misafirler.Count > oda.NormalKapasite + dto.EkYatakSayisi)
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.MisafirSayisiEslesmiyor);
            }

            using var transaction = await _context.Database.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);
            try
            {
                var girisT = dto.GirisTarihi;
                var cikisT = dto.CikisTarihi;

                var kapaliMi = await _context.OdaKapatmalari
                    .AnyAsync(k => k.OdaId == dto.OdaId && k.BaslangicTarihi < cikisT && k.BitisTarihi >= girisT);
                if (kapaliMi)
                {
                    await transaction.RollbackAsync();
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.SeciliYerMusaitDegil);
                }

                var cakisanVarMi = await _context.Rezervasyonlar.AnyAsync(r =>
                    r.OdaId == dto.OdaId &&
                    r.Durum == RezervasyonDurumu.Aktif &&
                    r.GirisTarihi < cikisT && r.CikisTarihi > girisT &&
                    (r.YatakId == null || dto.YatakId == null || r.YatakId == dto.YatakId));

                if (cakisanVarMi)
                {
                    await transaction.RollbackAsync();
                    return new ErrorDataResult<RezervasyonSonucDto>(Messages.SeciliYerMusaitDegil);
                }

                var rezervasyon = _mapper.Map<Rezervasyon>(dto);
                rezervasyon.RezervasyonKodu = RezervasyonKoduUret();

                _context.Rezervasyonlar.Add(rezervasyon);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                var sonucDto = _mapper.Map<RezervasyonSonucDto>(rezervasyon);
                sonucDto.OdaNo = oda.OdaNo;

                return new SuccessDataResult<RezervasyonSonucDto>(sonucDto, Messages.RezervasyonOlusturuldu);
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        private string RezervasyonKoduUret()
        {
            return Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper();
        }

        public async Task<IDataResult<RezervasyonDetayDto>> RezervasyonGetirAsync(string rezervasyonKodu)
        {
            var rezervasyon = await _context.Rezervasyonlar
                .AsNoTracking()
                .Include(r => r.Oda).ThenInclude(o => o.OdaTipi)
                .Include(r => r.Yatak)
                .Include(r => r.Misafirler)
                .FirstOrDefaultAsync(r => r.RezervasyonKodu == rezervasyonKodu);

            if (rezervasyon == null)
                return new ErrorDataResult<RezervasyonDetayDto>(Messages.RezervasyonBulunamadi);

            var detay = _mapper.Map<RezervasyonDetayDto>(rezervasyon);
            return new SuccessDataResult<RezervasyonDetayDto>(detay, Messages.RezervasyonGetirildi);
        }

        public async Task<IResult> RezervasyonIptalEtAsync(string rezervasyonKodu)
        {
            var rezervasyon = await _context.Rezervasyonlar
                .FirstOrDefaultAsync(r => r.RezervasyonKodu == rezervasyonKodu);

            if (rezervasyon == null)
                return new ErrorResult(Messages.RezervasyonBulunamadi);
            if (rezervasyon.Durum == RezervasyonDurumu.IptalEdildi)
                return new ErrorResult(Messages.RezervasyonZatenIptal);
            if (rezervasyon.CikisTarihi < DateOnly.FromDateTime(DateTime.Today))
                return new ErrorResult(Messages.RezervasyonTamamlanmis);

            rezervasyon.Durum = RezervasyonDurumu.IptalEdildi;
            await _context.SaveChangesAsync();

            return new SuccessResult(Messages.RezervasyonIptalEdildi);
        }

        public async Task<IDataResult<List<OdaGecmisiKaydiDto>>> OdaGecmisiGetirAsync(int odaId)
        {
            var odaVarMi = await _context.Odalar.AnyAsync(o => o.Id == odaId);
            if (!odaVarMi)
                return new ErrorDataResult<List<OdaGecmisiKaydiDto>>(Messages.OdaBulunamadi);

            var kayitlar = await _context.Rezervasyonlar
                .AsNoTracking()
                .Where(r => r.OdaId == odaId)
                .Include(r => r.Yatak)
                .Include(r => r.Misafirler)
                .OrderByDescending(r => r.GirisTarihi)
                .ToListAsync();

            var gecmis = _mapper.Map<List<OdaGecmisiKaydiDto>>(kayitlar);

            return new SuccessDataResult<List<OdaGecmisiKaydiDto>>(gecmis, Messages.OdaGecmisiGetirildi, gecmis.Count);
        }

        public IResult TAdd(Rezervasyon t)
        {
            try
            {
                _rezervasyonDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(Rezervasyon t)
        {
            try
            {
                _rezervasyonDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(Rezervasyon t)
        {
            try
            {
                _rezervasyonDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<Rezervasyon>> TGetList()
        {
            var liste = _rezervasyonDal.GetList();
            return new SuccessDataResult<List<Rezervasyon>>((List<Rezervasyon>)liste);
        }

        public IDataResult<Rezervasyon> TGetByID(int id)
        {
            var kayit = _rezervasyonDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<Rezervasyon>(kayit)
                : new ErrorDataResult<Rezervasyon>(Messages.KayitBulunamadi);
        }
    }
}