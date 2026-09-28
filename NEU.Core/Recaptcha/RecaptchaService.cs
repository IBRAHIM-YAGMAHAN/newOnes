
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace NEU.Core.Recaptcha
{
    public class RecaptchaService
    {
        private readonly HttpClient _httpClient;

        public RecaptchaService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<bool> VerifyCaptcha(string response)
        {
            // var secretKey = "6LeqDYAqAAAAAHdeboh9q5BDDOhZ0jnnLWNVTJpQ";
            var secretKey = "6LcFD6YpAAAAAA8rNdPgqJMQvPfTY7GqSnFS4voH";
            var url = $"https://www.google.com/recaptcha/api/siteverify?secret={secretKey}&response={response}";

            var httpResponse = await _httpClient.PostAsync(url, null);
            var jsonResponse = await httpResponse.Content.ReadAsStringAsync();
            var captchaResponse = JsonSerializer.Deserialize<CaptchaResponse>(jsonResponse);

            return captchaResponse?.success ?? false;
        }
    }

  
}