
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Dto.Dtos.GenelDtoFolder;


namespace NEU.Misafirhane.Business.Abstract
{
    public interface IGenelService
    {
        IDataResult<LDapSonucDto> LDapDogrula(LDapSorgulaDto lDapSorgula);
        public string SifreUret(int uzunluk = 0);
        IDataResult<List<GenelDataDto>> SabitGetir(string tip, int kategoriId);
    }
}

