using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Business.Abstract
{
    public interface IRezervasyonService
    {
        Task<IDataResult<List<MusaitOdaDto>>> MusaitOdalariGetirAsync(OdaAramaDto arama);

        Task<IDataResult<RezervasyonSonucDto>> RezervasyonOlusturAsync(RezervasyonOlusturDto dto);

        Task<IDataResult<RezervasyonDetayDto>> RezervasyonGetirAsync(string rezervasyonKodu);
        Task<IResult> RezervasyonIptalEtAsync(string rezervasyonKodu);
        Task<IDataResult<List<OdaGecmisiKaydiDto>>> OdaGecmisiGetirAsync(long odaId);
    }
}
