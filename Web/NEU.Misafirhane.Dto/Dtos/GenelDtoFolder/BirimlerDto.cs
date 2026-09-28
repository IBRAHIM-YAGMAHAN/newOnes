using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.SmsPanelYonetim.Entities.Dtos
{
    public class BirimlerDto
    {
        public Int64 birimid { get; set; }
        public string birimadi { get; set; }
        public Int64? birimtur_id { get; set; }
        public string turadi { get; set; }
        public string ustbirimadi { get; set; }
        public Int64? ustbirimid { get; set; }
        public Int64? durum_id { get; set; }
        public string durum { get; set; }
        public List<BirimlerDto> altbirimler { get; set; }
        public string birimkisaad { get; set; }
        public int? yoksisid { get; set; }
        public Int64 portal_id { get; set; }
        public string ogrenimturu { get; set; }
        public string programturu { get; set; }
        public string birimuzunad { get; set; }
        public bool kurumdisidurumu { get; set; }
    }


    public class BirimParam
    {
        public string aramastr { get; set; }
        public Int64 portalid { get; set; }
        public Int64[] birimid { get; set; }
        public Int64 ustbirimid { get; set; }
        public int[] durum { get; set; }
        public Int64[] birimtur { get; set; }
        public int altdurumu { get; set; }
    }


    public class BirimTur
    {
        public Int64? id { get; set; }
        public string turadi { get; set; }
    }
}
