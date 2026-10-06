using NEU.Core.Entities;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Fatura : IEntity
    {
        public int Id { get; set; }
        public int RezervasyonId { get; set; }
        public string FaturaNo { get; set; } = string.Empty;
        public DateTime FaturaTarihi { get; set; } = DateTime.Now;
        public string AdSoyadUnvan { get; set; } = string.Empty;
        public string? Adres { get; set; }
        public string? VergiNoTcKimlik { get; set; }
        public decimal AraToplam { get; set; }
        public decimal KdvOrani { get; set; }
        public decimal KdvTutari { get; set; }
        public decimal GenelToplam { get; set; }

        public Rezervasyon Rezervasyon { get; set; } = null!;
    }
}