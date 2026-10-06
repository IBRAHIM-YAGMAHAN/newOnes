using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder
{
    public class MusaitOdaDto
    {
        public int OdaId { get; set; }
        public string OdaNo { get; set; } = string.Empty;
        public string OdaTipi { get; set; } = string.Empty;
        public int NormalKapasite { get; set; }
        public int MaksEkYatak { get; set; }
        public bool TumOdaMusait { get; set; }
        public int EkYatakGerekli { get; set; }
        public List<MusaitYatakDto> MusaitYataklar { get; set; } = new();
    }

    public class MusaitYatakDto
    {
        public long YatakId { get; set; }
        public int YatakNo { get; set; }
    }
}
