using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using NEU.Core.Entities.Concrete;
using NEU.Core.Utilities.Results;
using NEU.Core.Utilities.Security.Jwt;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container.Autofac;
using NEU.Misafirhane.Dto.Dtos.AuthDtoFolder;
using Serilog;
using System.IdentityModel.Claims;
using System.Linq.Expressions;

namespace NEU.Misafirhane.WepApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult Login(KullaniciGirisDto kullaniciGirisDto)
        {
            var kullaniciGiris = _authService.Login(kullaniciGirisDto);
            if (!kullaniciGiris.Result.Success)
            {
                return BadRequest(kullaniciGiris.Result);
            }
            var result = _authService.CreateAccessToken(kullaniciGiris.Result.Data);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result); // result.Message 
        }




        [SecuredOperation("Refresh.Token.Alma")]
        [HttpPost("refreshtoken")]
        public ActionResult RefreshToken(string useruid)
        {
            var result = _authService.CreateRefreshToken(useruid);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result); // result.Message 
        }


        [HttpGet("cikis")]
        public ActionResult Cikis()
        {
            var _securedOperationClaim1 = new SecuredOperationClaim();
            var tckimlikno = _securedOperationClaim1.tckimlikno();
            Log.Warning("Çıkış yapıldı: {Message}", "Kullanıcı Bilgileri : " + tckimlikno);
            return Ok();
        }

        // Geliştirme ortamında sahte bir kullanıcı ile giriş yapmayı sağlayan endpoint
        [AllowAnonymous]
        [HttpPost("gelistirme-girisi")]
        public IActionResult GelistirmeGirisi([FromServices] IWebHostEnvironment env, [FromServices] ITokenHelper tokenHelper)
        {
            if (!env.IsDevelopment())
                return NotFound();

            var sahteKullanici = new Kullanici
            {
                id = 1,
                tckimlikno = 11111111111,
                adi = "Test",
                soyadi = "Yonetici",
                kullaniciAd = "test.yonetici"
            };

            var roller = new List<Rol>
            {
                new Rol { aciklama = "Yonetici", birim = 1 },
                new Rol { aciklama = "Oda.Gecmisi.Gorme", birim = 1 }
            };

            var token = tokenHelper.CreateToken(sahteKullanici, roller);
            return Ok(new SuccessDataResult<AccessToken>(token, "Geliştirme token'ı üretildi."));
        }

    }
}