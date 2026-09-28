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
    }
}
