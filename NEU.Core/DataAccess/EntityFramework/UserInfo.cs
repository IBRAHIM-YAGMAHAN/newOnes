using Microsoft.AspNetCore.Http;
using NEU.Core.Utilities.IoC;
using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using NEU.Core.Extensions;
using System.Security.Claims;
using System.Collections.Generic;

namespace NEU.Core.DataAccess.EntityFramework
{
    public class UserInfo 
    {
        private string[] _roles;
        private IHttpContextAccessor _httpContextAccessor;

        public UserInfo()
        {
            _httpContextAccessor = ServiceTool.ServiceProvider.GetService<IHttpContextAccessor>();
            // return Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("tckimlikno").FirstOrDefault() ?? "0");
            // GenelParametreler.Userid = Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("kullanici_id").FirstOrDefault() ?? "0");
        }

        public Int64 UserTCKimlikNo()
        {
            return Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("tckimlikno").FirstOrDefault() ?? "0");
        }

        public Int64 UserKullaniciid()
        {
            return Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("kullanici_id").FirstOrDefault() ?? "0");
        }

        public string ipAdres()
        {
            return _httpContextAccessor.HttpContext.Connection.RemoteIpAddress.ToString() ?? "";
        }

        public List<Claim> RolleriGetir()
        {
            return _httpContextAccessor.HttpContext.User.Claims.Where(x => x.Type == "Rol").ToList();

        }

    }
}
