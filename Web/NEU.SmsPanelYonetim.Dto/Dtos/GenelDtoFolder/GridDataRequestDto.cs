using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NEU.SmsPanelYonetim.Entities.Dtos;

namespace NEU.SmsPanelYonetim.Dto.Dtos.GenelDtoFolder
{
    public class GridDataRequestDto
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string[]? SortColumns { get; set; }
        public string[]? SortDirections { get; set; }
        public string[]? SearchColumns { get; set; }
        public string[]? SearchValues { get; set; }
        public int? FakulteYoMyoEnstituId { get; set; }
        public int? BirimId { get; set; }
        public int? MezuniyetYil { get; set; }
        public string? SecilenCalismaDurumu { get; set; }
        public string? SecilenFotografDurumu { get; set; }
        public string[]? SecilenOgrenimTipArray { get; set; }
    }
}
