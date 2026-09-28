using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEU.Core.Recaptcha
{
    public class CaptchaResponse
    {
        public bool success { get; set; }
        public string challengeTs { get; set; }
        public string hostname { get; set; }
    }
}
