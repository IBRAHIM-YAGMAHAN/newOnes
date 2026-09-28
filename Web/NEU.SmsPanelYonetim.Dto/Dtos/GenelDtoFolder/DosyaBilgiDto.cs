using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.SmsPanelYonetim.Entities.Dtos
{
    public class DosyaBilgiDto
    {
        public string FileBase64Data { get; set; } = string.Empty;
        public string FileName { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;
    }

    public class DosyaTip
    {
        public int id { get; set; }
        public string text { get; set; } = string.Empty;
    }
}
