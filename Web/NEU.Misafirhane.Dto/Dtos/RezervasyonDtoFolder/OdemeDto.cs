using NEU.Misafirhane.Entities.Enums;
using System;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class OdemeEkleDto
    {
        public string RezervasyonKodu { get; set; } = string.Empty;
        public decimal Tutar { get; set; }
        public OdemeYontemi OdemeYontemi { get; set; }
    }

    public class OdemeDto
    {
        public decimal Tutar { get; set; }
        public OdemeYontemi OdemeYontemi { get; set; }
        public DateTime OdemeTarihi { get; set; }
    }
}