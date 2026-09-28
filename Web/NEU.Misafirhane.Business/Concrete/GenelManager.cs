using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Dto.Dtos.GenelDtoFolder;
using Newtonsoft.Json;
using RestSharp;

namespace NEU.Misafirhane.Business.Concrete
{
    public class GenelManager : IGenelService
    {
        private IHttpContextAccessor _accessor;
        private readonly IMemoryCache _memoryCache;

        public GenelManager(IHttpContextAccessor accessor, IMemoryCache memoryCache)
        {
            _accessor = accessor;
            _memoryCache = memoryCache;
        }

        public IDataResult<LDapSonucDto> LDapDogrula(LDapSorgulaDto lDapSorgula)
        {
            var sonuc = new LDapSonucDto();
            try
            {
                var options = new RestClientOptions("http://api.erbakan.edu.tr")
                {
                    Timeout = TimeSpan.FromMilliseconds(10000) // 10 saniyelik zaman aşımı
                };
                var client = new RestClient(options);
                var request = new RestRequest("/LDap/getGirisDogrula", Method.Get);
                request.AddHeader("Authorization", "Basic bGRhcEJpbTpMNTAqWVBxOFJ6aVJQNEZKX3Q=");
                request.AddHeader("Content-Type", "application/json");
                string body = JsonConvert.SerializeObject(lDapSorgula);
                request.AddParameter("application/json", body, ParameterType.RequestBody);
                RestResponse response = client.Execute(request);
                sonuc = JsonConvert.DeserializeObject<LDapSonucDto>(response.Content);

            }
            catch (Exception)
            {
                sonuc.Durum = false;
                sonuc.Aciklama = "Hata Oluştu.";
                return new ErrorDataResult<LDapSonucDto>(sonuc, "Hata Oluştu.");
            }
            return new SuccessDataResult<LDapSonucDto>(sonuc, "İşlem Başarılı.");
        }

        public string SifreUret(int uzunluk = 0)
        {
            Random rastgele = new Random();
            string harfler = "ABCCDEFGHI012JKLMNOPRSTUVWYZ789abcCdefghijklmnoprstuvwyz3456";
            string password = "";
            for (int i = 0; i < uzunluk; i++)
            {
                password += harfler[rastgele.Next(harfler.Length)];
            }
            return password;
        }

        public IDataResult<List<GenelDataDto>> SabitGetir(string tip, int kategoriId)
        {
            var liste = new List<GenelDataDto>();

            switch (tip.ToLower())
            {
                case "cinsiyet":
                    liste.Add(new GenelDataDto { id = "1", deger = "Erkek" });
                    liste.Add(new GenelDataDto { id = "2", deger = "Kadın" });
                    break;
                case "medenihal":
                    liste.Add(new GenelDataDto { id = "1", deger = "Bekar" });
                    liste.Add(new GenelDataDto { id = "2", deger = "Evli" });
                    liste.Add(new GenelDataDto { id = "3", deger = "Boşanmış" });
                    liste.Add(new GenelDataDto { id = "4", deger = "Dul" });
                    break;
                default:
                    return new ErrorDataResult<List<GenelDataDto>>(liste, "Geçersiz tip parametresi.");
            }

            return new SuccessDataResult<List<GenelDataDto>>(liste, "İşlem başarılı.");
        }

    }
}
