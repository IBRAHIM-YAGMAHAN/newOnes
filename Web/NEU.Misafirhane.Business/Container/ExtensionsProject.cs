using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using NEU.Core.Recaptcha;
using NEU.Core.Utilities.Security.Jwt;
using NEU.Misafirhane.Business.Abstract;
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
            
        }
    }
}
