using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;

namespace NEU.Misafirhane.WepApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervasyonController : ControllerBase
    {
        private readonly IRezervasyonService _rezervasyonService;

        public RezervasyonController(IRezervasyonService rezervasyonService)
        {
            _rezervasyonService = rezervasyonService;
        }

        [AllowAnonymous]
        [HttpGet("musait-odalar")]
        public async Task<IActionResult> MusaitOdalar([FromQuery] OdaAramaDto arama)
        {
            var result = await _rezervasyonService.MusaitOdalariGetirAsync(arama);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> RezervasyonOlustur([FromBody] RezervasyonOlusturDto dto)
        {
            var result = await _rezervasyonService.RezervasyonOlusturAsync(dto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [AllowAnonymous]
        [HttpGet("{rezervasyonKodu}")]
        public async Task<IActionResult> RezervasyonGetir(string rezervasyonKodu)
        {
            var result = await _rezervasyonService.RezervasyonGetirAsync(rezervasyonKodu);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [AllowAnonymous]
        [HttpPost("{rezervasyonKodu}/iptal")]
        public async Task<IActionResult> RezervasyonIptalEt(string rezervasyonKodu)
        {
            var result = await _rezervasyonService.RezervasyonIptalEtAsync(rezervasyonKodu);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpGet("oda/{odaId}/gecmis")]
        public async Task<IActionResult> OdaGecmisi(long odaId)
        {
            var result = await _rezervasyonService.OdaGecmisiGetirAsync(odaId);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}