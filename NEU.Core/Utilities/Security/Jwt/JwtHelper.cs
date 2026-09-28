using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using NEU.Core.Extensions;
using NEU.Core.Entities.Concrete;
using NEU.Core.Utilities.Security.Encyption;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;

namespace NEU.Core.Utilities.Security.Jwt
{
    public class JwtHelper : ITokenHelper
    {
        public IConfiguration Configuration { get; }
        private TokenOptions _tokenOptions;
        private DateTime _accessTokenExpiration;

        public JwtHelper(IConfiguration configuration)
        {
            Configuration = configuration;
            _tokenOptions = Configuration.GetSection("TokenOptions").Get<TokenOptions>();
          //  _accessTokenExpiration = DateTime.Now.AddMinutes(_tokenOptions.AccesTokenExpiration); bug...

        }

        public AccessToken CreateToken(Kullanici kullanici, List<Rol> roller)
        {
            _accessTokenExpiration = DateTime.Now.AddMinutes(_tokenOptions.AccessTokenExpiration);
            var securityKey = SecurityKeyHelper.CreateSecurityKey(_tokenOptions.SecurityKey);
            var signingCredentials = SigningCredentialsHelper.CreateSigningCredentials(securityKey);
            var jwt = CreateJwtSecurityToken(_tokenOptions, kullanici, signingCredentials, roller);
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var token = jwtSecurityTokenHandler.WriteToken(jwt);

            return new AccessToken
            {
                Token = token,
                Expiration = _accessTokenExpiration
            };
        }

        public JwtSecurityToken CreateJwtSecurityToken(TokenOptions tokenOptions, Kullanici kullanici,  SigningCredentials signingCredentials, List<Rol> roller)
        {
            var jwt = new JwtSecurityToken(
                issuer: tokenOptions.Issuer,
                audience: tokenOptions.Audience,
                expires: _accessTokenExpiration,
                notBefore: DateTime.Now,
                claims: SetClaims(kullanici, roller),
                signingCredentials: signingCredentials
            );
            return jwt;
        }
        private IEnumerable<Claim> SetClaims(Kullanici kullanici, List<Rol> roller)
        {
            //var claims = new List<Claim>();
            //claims.AddNameIdentifier(kullanici.id.ToString());
            //claims.AddTCKimlikNo(kullanici.tckimlikno.ToString());
            //// claims.AddEmail(kullanici.Email);
            //claims.AddName($"{kullanici.adi} {kullanici.soyadi}");
            //claims.AddRoles(roller.Select(c => c.aciklama).ToArray());
            //return claims;
            var claims = new List<Claim>();
            claims.AddNameIdentifier(kullanici.id.ToString());
            claims.AddTCKimlikNo(kullanici.tckimlikno.ToString());
            // claims.AddEmail(kullanici.Email);
            claims.AddName($"{kullanici.adi} {kullanici.soyadi}");
            claims.AddRoles(roller);
            return claims;
        }
    }
}
