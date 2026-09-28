using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEU.SmsPanelYonetim.Dto.Dtos.UyeDtoFolder
{
    public class StaticDto
    {
        public string SmsKullaniciAdi { get; set; } = "konya.neu";
        public string SmsKullaniciSifre { get; set; } = "tYB3Ys3Iw";
        public string SmsBaslik { get; set; } = "NEU";
        //public string MailKullaniciAdi { get; set; } = "mbs@erbakan.edu.tr";
        //public string MailSifre { get; set; } = "M.B!42s13";

        public string MailKullaniciAdi { get; set; } = "neum@erbakan.edu.tr";
        public string MailSifre { get; set; } = "N4e!.U06*/";

    }
}
