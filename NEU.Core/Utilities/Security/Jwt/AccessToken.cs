using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Security.Jwt
{
    public class AccessToken
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string UserUid { get; set; }
    }
}
