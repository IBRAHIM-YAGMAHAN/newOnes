using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NEU.Core.Entities.Concrete
{
    public class KullaniciRol: IEntity
    {
        [Key]
        public Int64 id { get; set; }
        public Int64 kullanici_id { get; set; }
        public Int64 rol_id { get; set; }
    }
    public class KullaniciRolListe
    {
        public Int64 id { get; set; }
        public Int64 kullanici_id { get; set; }
        public Int64 rol_id { get; set; }
        public string aciklama { get; set; }
        public string durum { get; set; }
    }

    public class KullaniciFirmaListe
    {
        public Int64 id { get; set; }
        public Int64 kullanici_id { get; set; }
        public Int64 firma_id { get; set; }
        public string unvan { get; set; }
        public string durum { get; set; }
    }


}
