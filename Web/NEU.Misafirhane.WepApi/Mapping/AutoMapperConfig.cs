using AutoMapper;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;
using NEU.Misafirhane.Entities.Concrete;
using System.Linq;

namespace NEU.Misafirhane.WepApi.Mapping
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Oda, MusaitOdaDto>()
              .ForMember(d => d.OdaId, o => o.MapFrom(s => s.Id))
              .ForMember(d => d.OdaTipi, o => o.MapFrom(s => s.OdaTipi.Ad))
              .ForMember(d => d.TumOdaMusait, o => o.Ignore())
              .ForMember(d => d.EkYatakGerekli, o => o.Ignore())
              .ForMember(d => d.MusaitYataklar, o => o.Ignore());

            CreateMap<Yatak, MusaitYatakDto>()
                .ForMember(d => d.YatakId, o => o.MapFrom(s => s.Id));

            CreateMap<MisafirDto, Misafir>();
            CreateMap<Misafir, MisafirDto>();

            CreateMap<RezervasyonOlusturDto, Rezervasyon>()
                .ForMember(d => d.Id, o => o.Ignore())
                .ForMember(d => d.RezervasyonKodu, o => o.Ignore())
                .ForMember(d => d.Durum, o => o.Ignore())
                .ForMember(d => d.OlusturmaTarihi, o => o.Ignore())
                .ForMember(d => d.Misafirler, o => o.MapFrom(s => s.Misafirler));

            CreateMap<Rezervasyon, RezervasyonSonucDto>()
                .ForMember(d => d.OdaNo, o => o.Ignore());

            CreateMap<Rezervasyon, RezervasyonDetayDto>()
                .ForMember(d => d.OdaNo, o => o.MapFrom(s => s.Oda.OdaNo))
                .ForMember(d => d.OdaTipi, o => o.MapFrom(s => s.Oda.OdaTipi.Ad))
                .ForMember(d => d.YatakNo, o => o.MapFrom(s => s.Yatak != null ? (int?)s.Yatak.YatakNo : null));

            CreateMap<Rezervasyon, OdaGecmisiKaydiDto>()
                .ForMember(d => d.YatakNo, o => o.MapFrom(s => s.Yatak != null ? (int?)s.Yatak.YatakNo : null))
                .ForMember(d => d.MisafirAdSoyad, o => o.MapFrom(s => s.Misafirler.Select(m => m.Ad + " " + m.Soyad)));

            CreateMap<MusteriTipi, MusteriTipiDto>();

            CreateMap<Odeme, OdemeDto>();
            CreateMap<Fatura, FaturaDto>()
                .ForMember(d => d.OdenenTutar, o => o.MapFrom(s => s.Odemeler.Sum(x => x.Tutar)))
                .ForMember(d => d.KalanTutar, o => o.MapFrom(s => s.GenelToplam - s.Odemeler.Sum(x => x.Tutar)));
        }

    }
}