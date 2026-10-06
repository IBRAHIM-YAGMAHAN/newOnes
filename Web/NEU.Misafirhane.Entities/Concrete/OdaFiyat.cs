using NEU.Core.Entities;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class OdaFiyat : IEntity
    {
        public int Id { get; set; }
        public int OdaTipiId { get; set; }
        public int MusteriTipiId { get; set; }
        public decimal GecelikFiyat { get; set; }
        public decimal EkYatakGecelikFiyat { get; set; }
        public DateOnly GecerlilikBaslangic { get; set; }
        public DateOnly? GecerlilikBitis { get; set; }

        public OdaTipi OdaTipi { get; set; } = null!;
        public MusteriTipi MusteriTipi { get; set; } = null!;
    }
}