
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Dto.Dtos.DanismanDtoFolder;
using NEU.Misafirhane.Dto.Dtos.GenelDtoFolder;
using NEU.Misafirhane.Entities.Dtos;
using NEU.Misafirhane.Entities.Dtos.GenelDtoFolder;
using static NEU.Misafirhane.Entities.Dtos.ObsBilgiDto;

namespace NEU.Misafirhane.Business.Abstract
{
    public interface IGenelService
    {
        IDataResult<LDapSonucDto> LDapDogrula(LDapSorgulaDto lDapSorgula);
        public string SifreUret(int uzunluk = 0);
        IDataResult<List<GenelDataDto>> SabitGetir(string tip, int kategoriId);
    }
}

