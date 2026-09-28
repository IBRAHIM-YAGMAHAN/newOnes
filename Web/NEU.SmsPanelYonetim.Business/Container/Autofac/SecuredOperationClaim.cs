using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using NEU.Core.Extensions;
using NEU.Core.Utilities.IoC;

namespace NEU.SmsPanelYonetim.Business.Container.Autofac
{
    public class SecuredOperationClaim
    {
        private string[] _roles;
        private IHttpContextAccessor _httpContextAccessor;

        public SecuredOperationClaim()
        {
            _httpContextAccessor = ServiceTool.ServiceProvider.GetService<IHttpContextAccessor>();
        }

        public Int64 UserId()
        {
            return Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("kullanici_id").FirstOrDefault() ?? "0");
        }

        public Int64 tckimlikno()
        {
            return Int64.Parse(_httpContextAccessor.HttpContext.User.Claims("tckimlikno").FirstOrDefault() ?? "0");
        }

        public string adisoyadi()
        {
            return _httpContextAccessor.HttpContext.User.Claims("adisoyadi").FirstOrDefault() ?? "";
        }


        public bool yetkiVarMi(string roles)
        {
            _roles = roles.Split(',');
            _httpContextAccessor = ServiceTool.ServiceProvider.GetService<IHttpContextAccessor>();
            var roleClaims = _httpContextAccessor.HttpContext.User.ClaimRoles();
            foreach (var role in _roles)
            {
                if (roleClaims.Count(x => x.Contains(role)) > 0)
                {
                    return true;
                }
            }
            return false;
        }


      


        public List<Int64> YetkiliRoller()
        {
            List<Int64> yetkiliroller = new List<Int64> { };
            var roleClaims = _httpContextAccessor.HttpContext.User.ClaimRoles();
            string baslik = "";

            //foreach (var role in roleClaims)
            //{
            //        yetkiliroller.Add(role);
            //}

            return yetkiliroller;
        }
    }
}
