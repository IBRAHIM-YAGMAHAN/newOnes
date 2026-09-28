using NEU.Core.Entities.Concrete;
using NEU.Core.Utilities.Results;
using NEU.Core.Utilities.Security.Jwt;
using NEU.Misafirhane.Dto.Dtos.AuthDtoFolder;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Business.Abstract
{
    public interface IAuthService
    {
        Task<IDataResult<Kullanici>> Login(KullaniciGirisDto userForLoginDto);
        IDataResult<AccessToken> CreateAccessToken(Kullanici kullanici);
        List<Int64> YetkiliBirimleriGetir(string CurrentRole);
        KullaniciRolListesi GetClaims(Kullanici kullanici);
        IDataResult<AccessToken> CreateRefreshToken(string userUid);

    }
}
