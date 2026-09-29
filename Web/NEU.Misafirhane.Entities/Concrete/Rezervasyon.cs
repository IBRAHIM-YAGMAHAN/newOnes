using NEU.Core.Entities;
using NEU.Misafirhane.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Rezervasyon : IEntity
    {
        public long Id { get; set; }
        public string RezervasyonKodu { get; set; } = string.Empty;
        public long OdaId { get; set; }
        public long? YatakId { get; set; }
        public KiralamaTipi KiralamaTipi { get; set; }
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }
        public RezervasyonDurumu Durum { get; set; } = RezervasyonDurumu.Aktif;
        public string Email { get; set; } = string.Empty;
        public DateTime OlusturmaTarihi { get; set; } = DateTime.Now;

        public Oda Oda { get; set; } = null!;
        public Yatak? Yatak { get; set; }
        public List<Misafir> Misafirler { get; set; } = new();

        public int EkYatakSayisi { get; set; }
    }
}
