using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class OdaAramaDto 
    {
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }
        public int KisiSayisi { get; set; } = 1;
    }
}
