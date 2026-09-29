using NEU.Misafirhane.Entities.Enums;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class RezervasyonDetayDto
    {
        public string RezervasyonKodu { get; set; } = string.Empty;
        public string OdaNo { get; set; } = string.Empty;
        public string OdaTipi { get; set; } = string.Empty;
        public KiralamaTipi KiralamaTipi { get; set; }
        public int? YatakNo { get; set; }
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }
        public RezervasyonDurumu Durum { get; set; }
        public int EkYatakSayisi { get; set; }
        public string Email { get; set; } = string.Empty;
        public List<MisafirDto> Misafirler { get; set; } = new();
    }

    public class OdaGecmisiKaydiDto
    {
        public string RezervasyonKodu { get; set; } = string.Empty;
        public DateOnly GirisTarihi { get; set; }
        public DateOnly CikisTarihi { get; set; }
        public RezervasyonDurumu Durum { get; set; }
        public KiralamaTipi KiralamaTipi { get; set; }
        public int? YatakNo { get; set; }
        public List<string> MisafirAdSoyad { get; set; } = new();
    }
}