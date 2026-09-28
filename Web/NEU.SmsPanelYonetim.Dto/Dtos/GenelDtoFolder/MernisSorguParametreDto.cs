using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.SmsPanelYonetim.Entities.Dtos.GenelDtoFolder
{
    public class MernisSorguParametreDto
    {
        public long KimlikNo { get; set; }
        public long SorgulayanTc { get; set; }
        public int DogumGun { get; set; }
        public int DogumAy { get; set; }
        public int DogumYil { get; set; }

    }
    public class Sonuc
    {
        public bool Durum { get; set; }
        public int HataKod { get; set; }
        public string Hata { get; set; }
    }
    public class GetTCKKResponse : Sonuc
    {
        public string Ad { get; set; }
        public string AnneAd { get; set; }
        public string BabaAd { get; set; }
        public string BasvuruNeden { get; set; }
        public string Cinsiyet { get; set; }
        public string DogumTarih { get; set; }
        public string DogumYer { get; set; }
        public string HataBilgisi { get; set; }
        public string KayitNo { get; set; }
        public string SeriNo { get; set; }
        public string SonGecerlilikTarih { get; set; }
        public string Soyad { get; set; }
        public long TCKimlikNo { get; set; }
        public string TeslimEdenBirim { get; set; }
        public string TeslimTarih { get; set; }
        public string VerenMakam { get; set; }
    }


    public class GetKimlikResponse : Sonuc
    {
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public string Anaad { get; set; }
        public string Babaad { get; set; }
        public string Cinsiyet { get; set; }
        public string Dogumtar { get; set; }
        public string Dogumyer { get; set; }

        public string Kizliksoyad { get; set; }
        public string Medenihal { get; set; }
        public int Ailesirano { get; set; }
        public int Bireysirano { get; set; }
        public string MahalleKoy { get; set; }
        public int Ciltkod { get; set; }
        public string Ilad { get; set; }
        public string Ilcead { get; set; }
        public int Ilkod { get; set; }
        public int Ilcekod { get; set; }
        public string Tckimlikno { get; set; }
        public string Olumtar { get; set; }

        public string Uyruk { get; set; }


    }
    public class GetAdresResponse : Sonuc
    {
        public string Il { get; set; }
        public int IlKod { get; set; }
        public string Ilce { get; set; }
        public int IlceKod { get; set; }
        public string Adres { get; set; }
        public string sayi { get; set; }
    }
}
