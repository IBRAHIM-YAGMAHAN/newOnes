using NEU.Misafirhane.Entities.Enums;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class MisafirDto
    {
        public string Ad { get; set; } = string.Empty;
        public string Soyad { get; set; } = string.Empty;
        public string TcKimlikNo { get; set; } = string.Empty;
    }

    public class RezervasyonOlusturDto
    {
        public int OdaId { get; set; }
        public int? YatakId { get; set; }
        public KiralamaTipi KiralamaTipi { get; set; }
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }
        public int EkYatakSayisi { get; set; }
        public int MusteriTipiId { get; set; }
        public string Email { get; set; } = string.Empty;
        public List<MisafirDto> Misafirler { get; set; } = new();
    }

    public class RezervasyonSonucDto
    {
        public string RezervasyonKodu { get; set; } = string.Empty;
        public string OdaNo { get; set; } = string.Empty;
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }

        public decimal ToplamTutar { get; set; }
        public int GeceSayisi { get; set; }
    }
}