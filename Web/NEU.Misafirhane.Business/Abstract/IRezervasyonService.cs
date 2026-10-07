using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;
using NEU.Misafirhane.Entities.Concrete;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NEU.Misafirhane.Business.Abstract
{
    public interface IRezervasyonService : IGenericService<Rezervasyon>
    {
        Task<IDataResult<List<MusaitOdaDto>>> MusaitOdalariGetirAsync(OdaAramaDto arama);
        Task<IDataResult<RezervasyonSonucDto>> RezervasyonOlusturAsync(RezervasyonOlusturDto dto);
        Task<IDataResult<RezervasyonDetayDto>> RezervasyonGetirAsync(string rezervasyonKodu);
        Task<IResult> RezervasyonIptalEtAsync(string rezervasyonKodu);
        Task<IDataResult<List<OdaGecmisiKaydiDto>>> OdaGecmisiGetirAsync(int odaId);

        Task<IDataResult<FaturaDto>> FaturaOlusturAsync(FaturaOlusturDto dto);
        Task<IDataResult<FaturaDto>> FaturaGetirAsync(string rezervasyonKodu);

        Task<IDataResult<OdemeDto>> OdemeEkleAsync(OdemeEkleDto dto);
        Task<IDataResult<List<OdemeDto>>> OdemeleriGetirAsync(string rezervasyonKodu);
    }
}