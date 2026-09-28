using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Dto.Dtos.AuthDtoFolder
{
    public class KullaniciGirisDto : IDto
    {
        public string tckimlikno { get; set; }
        public string sifre { get; set; }
        public string? CaptchaResponse { get; set; } // reCAPTCHA yanıtı
    }

}
