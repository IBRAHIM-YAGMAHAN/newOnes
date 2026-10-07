using System;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class FaturaOlusturDto
    {
        public string RezervasyonKodu { get; set; } = string.Empty;
        public string AdSoyadUnvan { get; set; } = string.Empty;
        public string? Adres { get; set; }
        public string? VergiNoTcKimlik { get; set; }
        public decimal KdvOrani { get; set; } = 20;
    }

    public class FaturaDto
    {
        public string FaturaNo { get; set; } = string.Empty;
        public DateTime FaturaTarihi { get; set; }
        public string AdSoyadUnvan { get; set; } = string.Empty;
        public string? Adres { get; set; }
        public string? VergiNoTcKimlik { get; set; }
        public decimal AraToplam { get; set; }
        public decimal KdvOrani { get; set; }
        public decimal KdvTutari { get; set; }
        public decimal GenelToplam { get; set; }

        public decimal OdenenTutar { get; set; }
        public decimal KalanTutar { get; set; }
    }
}