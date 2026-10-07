using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;
using System.Collections.Generic;

namespace NEU.Misafirhane.WepApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusteriTipiController : ControllerBase
    {
        private readonly IMusteriTipiService _musteriTipiService;
        private readonly IMapper _mapper;

        public MusteriTipiController(IMusteriTipiService musteriTipiService, IMapper mapper)
        {
            _musteriTipiService = musteriTipiService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Liste()
        {
            var result = _musteriTipiService.TGetList();
            if (!result.Success) return BadRequest(result);

            var dto = _mapper.Map<List<MusteriTipiDto>>(result.Data);
            return Ok(new SuccessDataResult<List<MusteriTipiDto>>(dto));
        }
    }
}