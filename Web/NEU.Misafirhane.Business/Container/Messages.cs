using NEU.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Business.Container
{
    public static class Messages
    {

        // Dil ayarları vs. için sabitler....

        public static string UserNotFound = "Kullanıcı bulunamadı.";
        public static string PasswordError = "TC Kimlik No veya Şifre hatalı. Lütfen tekrar deneyiniz.";
        public static string SuccessfulLogin = "giriş yapıldı";
        public static string UserAlreadyExists = "kullanıcı mevcut";
        public static string AccessTokenCreated = "token oluşturuldu";
        public static string UserRegistered = "kullanıcı kaydedildi";
        public static string AuthorizationDenied = "yetkiniz yok";

        // Rezervasyon
        public const string GirisTarihiGecmiste = "Giriş tarihi geçmişte olamaz.";
        public const string CikisTarihiGiristenSonraOlmali = "Çıkış tarihi giriş tarihinden sonra olmalıdır.";
        public const string GirisTarihiCokIleride = "En fazla {0} gün sonrası için rezervasyon yapılabilir.";
        public const string KisiSayisiGecersiz = "Kişi sayısı en az 1 olmalıdır.";
        public const string MusaitOdalarGetirildi = "Müsait odalar getirildi.";

        public const string TcKimlikGecersiz = "T.C. Kimlik No 11 haneli olmalıdır.";
        public const string MisafirSayisiEslesmiyor = "Misafir sayısı seçilen kapasiteyle uyuşmuyor.";
        public const string YatakOdayaAitDegil = "Seçilen yatak bu odaya ait değil.";
        public const string YatakKiralamaOdaIcermez = "Yatak kiralamada oda bilgisi (YatakId) gönderilmeli, ek yatak istenemez.";
        public const string OdaKiralamadaYatakIstenmez = "Oda kiralamada yatak seçilmez, YatakId boş olmalıdır.";
        public const string EkYatakSiniriAsildi = "Seçilen ek yatak sayısı odanın izin verdiği sınırı aşıyor.";
        public const string SeciliYerMusaitDegil = "Seçtiğiniz oda/yatak bu tarihler için artık müsait değil, lütfen tekrar arayın.";
        public const string RezervasyonOlusturuldu = "Rezervasyon oluşturuldu.";

        public const string RezervasyonBulunamadi = "Bu koda ait rezervasyon bulunamadı.";
        public const string RezervasyonZatenIptal = "Bu rezervasyon zaten iptal edilmiş.";
        public const string RezervasyonTamamlanmis = "Konaklaması tamamlanmış rezervasyon iptal edilemez.";
        public const string RezervasyonIptalEdildi = "Rezervasyon iptal edildi.";
        public const string RezervasyonGetirildi = "Rezervasyon getirildi.";
        public const string OdaGecmisiGetirildi = "Oda geçmişi getirildi.";
        public const string OdaBulunamadi = "Oda bulunamadı.";


        public const string KayitEklendi = "Kayıt eklendi.";
        public const string KayitGuncellendi = "Kayıt güncellendi.";
        public const string KayitSilindi = "Kayıt silindi.";
        public const string KayitBulunamadi = "Kayıt bulunamadı.";
        public const string IslemHatasi = "İşlem sırasında bir hata oluştu: {0}";
    }
}
