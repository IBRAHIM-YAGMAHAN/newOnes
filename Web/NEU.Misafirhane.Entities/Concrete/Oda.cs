using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Oda : IEntity
    {
        public int Id { get; set; }
        public string OdaNo { get; set; } = string.Empty;
        public string? Aciklama { get; set; }
        public bool AktifMi { get; set; } = true;
        public List<Yatak> Yataklar { get; set; } = new();

        //gecmiş için lazım olacak
        public List<Rezervasyon> Rezervasyonlar { get; set; } = new();
        public int OdaTipiId { get; set; }
        public int NormalKapasite { get; set; }
        public int MaksEkYatak { get; set; }
        public OdaTipi OdaTipi { get; set; } = null!;
        public List<OdaKapatma> Kapatmalar { get; set; } = new();

        public List<OdaOzellik> Ozellikler { get; set; } = new();
    }
}
