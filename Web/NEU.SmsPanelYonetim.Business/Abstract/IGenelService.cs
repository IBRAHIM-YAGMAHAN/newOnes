
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NEU.Core.Utilities.Results;
using NEU.SmsPanelYonetim.Dto.Dtos.DanismanDtoFolder;
using NEU.SmsPanelYonetim.Dto.Dtos.GenelDtoFolder;
using NEU.SmsPanelYonetim.Entities.Dtos;
using NEU.SmsPanelYonetim.Entities.Dtos.GenelDtoFolder;
using static NEU.SmsPanelYonetim.Entities.Dtos.ObsBilgiDto;

namespace NEU.SmsPanelYonetim.Business.Abstract
{
    public interface IGenelService
    {
        IDataResult<LDapSonucDto> LDapDogrula(LDapSorgulaDto lDapSorgula);
        public string SifreUret(int uzunluk = 0);
        IDataResult<List<GenelDataDto>> SabitGetir(string tip, int kategoriId);
    }
}

