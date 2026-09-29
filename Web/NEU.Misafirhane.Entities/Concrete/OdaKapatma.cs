using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class OdaKapatma : IEntity
    {
        public long Id { get; set; }
        public long OdaId { get; set; }
        public DateOnly BaslangicTarihi { get; set; }
        public DateOnly BitisTarihi { get; set; }
        public string? Sebep { get; set; }
        public DateTime OlusturmaTarihi { get; set; } = DateTime.Now;
        public Oda Oda { get; set; } = null!;
    }
}
