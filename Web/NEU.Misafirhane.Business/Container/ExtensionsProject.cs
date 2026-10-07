using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using NEU.Core.Recaptcha;
using NEU.Core.Utilities.Security.Jwt;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.ValidationRules.FluentValidation;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.DataAccess.EntityFramework;
using System.Text;

namespace NEU.Misafirhane.Business.Concrete
{
    public static class ExtensionsProject
    {
        public static void ContainerDependencies(IServiceCollection services)
        {
            services.AddScoped<IGenelService, GenelManager>();
            services.AddScoped<IAuthService, AuthManager>();


            services.AddScoped<IRezervasyonService, RezervasyonManager>();


            services.AddScoped<ITokenHelper, JwtHelper>();

            services.AddScoped<IHttpContextAccessor, HttpContextAccessor>();

            services.AddScoped<IOdaTipiDal, EfOdaTipiDal>();
            services.AddScoped<IOdaDal, EfOdaDal>();
            services.AddScoped<IYatakDal, EfYatakDal>();
            services.AddScoped<IOdaKapatmaDal, EfOdaKapatmaDal>();
            services.AddScoped<IMisafirDal, EfMisafirDal>();
            services.AddScoped<IRezervasyonDal, EfRezervasyonDal>();

            services.AddScoped<IOzellikDal, EfOzellikDal>();
            services.AddScoped<IOdaOzellikDal, EfOdaOzellikDal>();
            services.AddScoped<IMusteriTipiDal, EfMusteriTipiDal>();
            services.AddScoped<IOdaFiyatDal, EfOdaFiyatDal>();
            services.AddScoped<IFaturaDal, EfFaturaDal>();

            services.AddScoped<IOdaTipiService, OdaTipiManager>();
            services.AddScoped<IOdaService, OdaManager>();
            services.AddScoped<IYatakService, YatakManager>();
            services.AddScoped<IOdaKapatmaService, OdaKapatmaManager>();
            services.AddScoped<IOzellikService, OzellikManager>();
            services.AddScoped<IMusteriTipiService, MusteriTipiManager>();
            services.AddScoped<IOdaFiyatService, OdaFiyatManager>();

            services.AddScoped<IOdemeDal, EfOdemeDal>();

            services.AddHttpClient<RecaptchaService>();

        }


        public static void AddJwtAuthentication(this IServiceCollection services, string secret, string Issuer, string Audience)
        {
            var key = Encoding.ASCII.GetBytes(secret);

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidIssuer = Issuer,
                    ValidAudience = Audience,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret))
                };
            });
        }


        public static void CustomValidator(IServiceCollection services)
        {
            services.AddValidatorsFromAssemblyContaining<RezervasyonOlusturDtoValidator>();
        }
    }
}
