
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEU.Misafirhane.Dto.Dtos.GenelDtoFolder
{
    public class LDapSorgulaDto
    {
        public string Tip { get; set; }
        public string TcKn { get; set; }
        public string Sifre { get; set; }
    }

    public class LDapSonucDto
    {
        public bool Durum { get; set; }
        public string Tc { get; set; }
        public string Aciklama { get; set; }
    }
}
