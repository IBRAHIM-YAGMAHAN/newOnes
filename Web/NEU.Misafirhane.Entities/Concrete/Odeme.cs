using NEU.Core.Entities;
using NEU.Misafirhane.Entities.Enums;
using System;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Odeme : IEntity
    {
        public int Id { get; set; }
        public int FaturaId { get; set; }
        public decimal Tutar { get; set; }
        public OdemeYontemi OdemeYontemi { get; set; }
        public DateTime OdemeTarihi { get; set; } = DateTime.Now;

        public Fatura Fatura { get; set; } = null!;
    }
}