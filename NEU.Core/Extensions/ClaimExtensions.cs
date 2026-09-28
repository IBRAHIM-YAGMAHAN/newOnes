using NEU.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace NEU.Core.Extensions
{
    public static class ClaimExtensions
    {
        public static void AddEmail(this ICollection<Claim> claims, string email)
        {
            claims.Add(new Claim(JwtRegisteredClaimNames.Email, email));
        }

        public static void AddTCKimlikNo(this ICollection<Claim> claims, string tckimlikno)
        {
            claims.Add(new Claim("tckimlikno", tckimlikno)); // ClaimTypes.NameIdentifier
        }

        public static void AddName(this ICollection<Claim> claims, string name)
        {
            claims.Add(new Claim("adisoyadi", name)); // ClaimTypes.Name
        }

        public static void AddNameIdentifier(this ICollection<Claim> claims, string nameIdentifier)
        {
            claims.Add(new Claim("kullanici_id", nameIdentifier));  // ClaimTypes.NameIdentifier
        }

        public static void AddRoles(this ICollection<Claim> claims, List<Rol> roles)
        {
            //List<ClaimsIdentity> liste = new List<ClaimsIdentity>();


            //foreach (var item in roles)
            //{
            //    ClaimsIdentity listeC = new ClaimsIdentity();
            //    var liste1 = new List<Claim>();
            //    var yeni = new Claim("Rol", item.aciklama,);
            //    var clone = yeni.Clone();
            //    liste1.Add(yeni);
            //    listeC.AddClaims(liste1);
            //}


            roles.ToList().ForEach(role => claims.Add(new Claim("Rol", role.aciklama + "-" + role.birim.ToString()))); // ClaimTypes.Role
        }

    }
}
