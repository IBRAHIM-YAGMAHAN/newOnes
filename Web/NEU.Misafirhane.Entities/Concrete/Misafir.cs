using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Misafir : IEntity
    {
        public int Id { get; set; }
        public int RezervasyonId { get; set; }
        public string Ad { get; set; } = string.Empty;
        public string Soyad { get; set; } = string.Empty;
        public string TcKimlikNo { get; set; } = string.Empty;
        public Rezervasyon Rezervasyon { get; set; } = null!;
    }
}
