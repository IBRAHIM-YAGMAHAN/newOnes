using NEU.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Security.Jwt
{
    public interface ITokenHelper
    {
        AccessToken CreateToken(Kullanici kullanici, List<Rol> roller);
    }
}
