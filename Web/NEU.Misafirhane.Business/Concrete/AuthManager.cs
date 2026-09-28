using NEU.Core.DataAccess.EntityFramework;
using NEU.Core.Entities.Concrete;
using NEU.Core.Recaptcha;
using NEU.Core.Utilities.Results;
using NEU.Core.Utilities.Security.Jwt;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.Business.Container.Autofac;
using NEU.Misafirhane.Dto.Dtos.AuthDtoFolder;
using NEU.Misafirhane.Dto.Dtos.GenelDtoFolder;
using Newtonsoft.Json;
using RestSharp;
using Serilog;

namespace NEU.Misafirhane.Business.Concrete
{
    public class AuthManager : IAuthService
    {

        private ITokenHelper _tokenHelper;
        private IGenelService _genelService;
        private RecaptchaService _recaptchaService;
        public AuthManager(ITokenHelper tokenHelper, IGenelService genelService, RecaptchaService recaptchaService)
        {
            _tokenHelper = tokenHelper;
            _genelService = genelService;
            _recaptchaService = recaptchaService;
        }

        public IDataResult<AccessToken> CreateAccessToken(Kullanici kullanici)
        {
            var claims = GetClaims(kullanici);
            if (claims.Success)
            {
                if (claims.Roller.Count == 1)
                {
                    return new ErrorDataResult<AccessToken>(null, "Sisteme Kayıtlı Herhangi Bir Yetkiniz Bulunmamaktadır...");
                }
                else
                {
                    List<Rol> roller = new List<Rol>();
                    foreach (var item in claims.Roller)
                    {
                        Rol rol = new Rol();
                        rol.aciklama = item.RolAdi;
                        rol.birim = item.BirimID;
                        // rol.birim = item.NebisBirimID;
                        roller.Add(rol);
                    }



                    kullanici.adi = claims.Adi;
                    kullanici.soyadi = claims.Soyadi;


                    var accessToken = _tokenHelper.CreateToken(kullanici, roller);
                    accessToken.UserUid = Guid.NewGuid().ToString();
                    kullanici.UserUid = accessToken.UserUid;
                    return new SuccessDataResult<AccessToken>(accessToken, Messages.AccessTokenCreated);
                }
            }
            return new ErrorDataResult<AccessToken>(null, claims.Message);
        }

        public IDataResult<AccessToken> CreateRefreshToken(string userUid)
        {
            var _securedOperationClaim1 = new SecuredOperationClaim();
            var tckimlikno = _securedOperationClaim1.tckimlikno();

            Kullanici kullanici = new Kullanici();
            kullanici.tckimlikno = tckimlikno;

            if (kullanici == null)
                return new ErrorDataResult<AccessToken>("Kullanıcı giriş tanımlı değil");


            var claims = GetClaims(kullanici);
            List<Rol> roller = new List<Rol>();
            foreach (var item in claims.Roller)
            {
                Rol rol = new Rol();
                rol.aciklama = item.RolAdi;
                rol.birim = item.BirimID;
                // rol.birim = item.NebisBirimID;
                roller.Add(rol);
            }



            kullanici.adi = claims.Adi;
            kullanici.soyadi = claims.Soyadi;


            var accessToken = _tokenHelper.CreateToken(kullanici, roller);
            accessToken.UserUid = kullanici.UserUid;
            return new SuccessDataResult<AccessToken>(accessToken, Messages.AccessTokenCreated);
        }

        public KullaniciRolleri KulRolEkle(string rolAdi = "", string rolAciklmasi = "")
        {
            KullaniciRolleri kullaniciRolleri = new KullaniciRolleri();
            kullaniciRolleri.BirimAdi = "";
            kullaniciRolleri.BirimID = 0;
            kullaniciRolleri.NebisBirimID = 0;
            kullaniciRolleri.RolAdi = rolAdi;
            kullaniciRolleri.RolAciklmasi = rolAciklmasi;
            kullaniciRolleri.UygulamaAdi = "Kişisel Uygulama";
            return kullaniciRolleri;
        }

        public KullaniciRolListesi GetClaims(Kullanici kullanici)
        {
            List<KullaniciRolleri> kullaniciRolleriList = new List<KullaniciRolleri>();

            if (kullanici.kullaniciAd == "UyeStandart")
            {
                var roller = new List<string[,]>
{
    new string[,] { { "Uye.Standart", "" } },
    new string[,] { { "Uye.GetById", "" } },
    new string[,] { { "Uye.SifreDegistir", "" } },
    new string[,] { { "Uye.Update", "" } },
    new string[,] { { "Uye.GetGridDataAra", "" } },
    new string[,] { { "Egitim.GetListByUyeId", "" } },
    new string[,] { { "Egitim.EgitimBilgiEkleYok", "" } },
    new string[,] { { "Egitim.Update", "" } },
    new string[,] { { "Egitim.Add", "" } },
    new string[,] { { "IsBilgi.GetListByUyeId", "" } },
    new string[,] { { "IsBilgi.Update", "" } },
    new string[,] { { "IsBilgi.Add", "" } },


    new string[,] { { "Talep.Add", "" } },
    new string[,] { { "Talep.Update", "" } },
    new string[,] { { "Talep.GetById", "" } },
    new string[,] { { "Talep.GetNebisById", "" } },
    new string[,] { { "Talep.BirimList", "" } },
    new string[,] { { "Talep.KategoriList", "" } },
    new string[,] { { "Talep.NebisGetList", "" } },
    new string[,] { { "Talep.NebisAktifTalepList", "" } },
    new string[,] { { "Talep.Delete", "" } },
    new string[,] { { "Talep.FileDelete", "" } },
    new string[,] { { "Talep.GetList", "" } },
    new string[,] { { "SabitParametre.GetById", "" } },
};
                foreach (var rol in roller)
                {
                    kullaniciRolleriList.Add(KulRolEkle(rol[0, 0], rol[0, 1]));
                }
            }

            var sonuc = new KullaniciRolListesi();

            if (kullanici.kullaniciAd != "UyeStandart")
            {
                var options = new RestClientOptions("http://10.35.0.51:99")
                {
                    MaxTimeout = -1,
                };
                var client = new RestClient(options);
                var request = new RestRequest("/api/KullaniciYonetimi/KullaniciRolleri?KullaniciAdi=" + kullanici.tckimlikno + "&Uygulama=NeuMezunUygulama", Method.Get);
                request.AddHeader("Authorization", "Basic VXNyTmV1TWV6dW46TS50WF8xOCUuQTA/IQ==");
                RestResponse response = client.Execute(request);
                sonuc = JsonConvert.DeserializeObject<KullaniciRolListesi>(response.Content);
            }
            var dataRefresh = KulRolEkle("Refresh.Token.Alma", "Refresh token yetkisi için kullanıclacaktır.");
            kullaniciRolleriList.Add(dataRefresh);

            if (sonuc?.Roller == null)
            {
                sonuc.Roller = kullaniciRolleriList;
                sonuc.Success = true;
            }
            else
            {
                sonuc.Roller.AddRange(kullaniciRolleriList);
                sonuc.Success = true;
            }
            return sonuc;
        }

        public async Task<IDataResult<Kullanici>> Login(KullaniciGirisDto userForLoginDto)
        {
            try
            {
                if ((String.IsNullOrEmpty(userForLoginDto.tckimlikno?.Trim()) || String.IsNullOrEmpty(userForLoginDto.sifre)))
                {
                    Log.Error("Hata oluştu: {Message}", "Lütfen gerekli alanları doldurunuz.");
                    return new ErrorDataResult<Kullanici>("Lütfen gerekli alanları doldurunuz.");
                }

                //var isCaptchaValid = await _recaptchaService.VerifyCaptcha(userForLoginDto.CaptchaResponse);
                //if (!isCaptchaValid)
                //{
                //    Log.Error("Hata oluştu: {Message}", "Captcha zorunludur.");
                //    return new ErrorDataResult<Kullanici>("Captcha zorunludur.");
                //}

                Kullanici kullanicikontrol = new Kullanici();
                var lDapSorgula = new LDapSorgulaDto();
                lDapSorgula.TcKn = userForLoginDto.tckimlikno;
                lDapSorgula.Sifre = userForLoginDto.sifre;
                lDapSorgula.Tip = "personel";

                bool uyeSifreKontrol = false;


                var kullaniciDogrulaLDap = _genelService.LDapDogrula(lDapSorgula);
                // kullaniciDogrulaLDap.Data.Durum = true;  // şifresiz girişte kullanılacak
                if (kullaniciDogrulaLDap == null)
                {
                    return new ErrorDataResult<Kullanici>("Hatalı Kullanıcı Bilgileri");
                }
                if (!kullaniciDogrulaLDap.Data.Durum && uyeSifreKontrol == false) // Kullanıcı Adı veya Tek şifre Hatalı ise
                {
                    Log.Warning("Hata oluştu: {Message}", "Hatalı Kullanıcı Bilgileri : " + userForLoginDto.tckimlikno);
                    return new ErrorDataResult<Kullanici>("Hatalı Kullanıcı Bilgileri");
                }


                kullanicikontrol.tckimlikno = Convert.ToInt64(userForLoginDto.tckimlikno);

                Log.Warning("Giriş yapıldı: {Message}", "Kullanıcı Bilgileri : " + userForLoginDto.tckimlikno);
                return new SuccessDataResult<Kullanici>(kullanicikontrol, "Giriş Başarılı.");
            }
            catch (Exception)
            {

                return new ErrorDataResult<Kullanici>(null, "Hata Oluştu.");
            }

        }

        public List<long> YetkiliBirimleriGetir(string CurrentRole)
        {
            List<Int64> liste = new List<Int64>();
            UserInfo userInfo = new UserInfo();
            var roller = userInfo.RolleriGetir();
            var roleClaims = roller.Where(x => x.Value.Contains(CurrentRole)).ToList();
            if (roleClaims.Count(x => x.Value.Substring(x.Value.Length - 2, 2) == "-0") > 0)
            {
                liste.Add(0);
                return liste;
            }

            //foreach (var item in roleClaims)
            //{
            //    Int64 fakulteID = Int64.Parse(item.Value.Split('-').Last().ToString());
            //    liste.Add(fakulteID);
            //    List<Int64> birimler = new List<Int64>();
            //    var bolumIDler = _genelService.TanimBirimler(Convert.ToInt32(fakulteID), "", birimler).Data.ToList();
            //    foreach (var bolum in bolumIDler)
            //    {
            //        liste.Add(bolum.birimid);
            //    }

            //}

            return liste;
        }
    }
}
