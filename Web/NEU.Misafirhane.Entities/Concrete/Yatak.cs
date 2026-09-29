using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Yatak : IEntity
    {
        public long Id { get; set; }
        public long OdaId { get; set; }
        public int YatakNo { get; set; }
        public Oda Oda { get; set; } = null!;
    }
}
