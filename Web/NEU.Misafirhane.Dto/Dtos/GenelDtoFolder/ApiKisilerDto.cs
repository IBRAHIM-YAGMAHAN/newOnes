using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEU.Misafirhane.Dto.Dtos.DanismanDtoFolder
{
    public class ApiKisilerDto
    {
        public Int64 id { get; set; }
        public int GorevTipi { get; set; }
        public string Tc { get; set; }
        public string KisiAdi { get; set; }
        public string KisiSoyadi { get; set; }
        public string Unvani { get; set; }
        public string Kurumu { get; set; }
        public string KurumBilgileri { get; set; }
        public string CepTel { get; set; }
        public string IsTel { get; set; }
        public string Eposta { get; set; }
        public int KullanimSertifikaDurumu { get; set; }
        public DateTime? KayitTarihi { get; set; }
        public int Durum { get; set; }

    }
}
