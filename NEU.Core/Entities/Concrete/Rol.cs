using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NEU.Core.Entities.Concrete
{
    public class Rol: IEntity
    {
        [Key]
        public Int64 id { get; set; }
        public string aciklama { get; set; }
        public int birim { get; set; }
    }
    public class KullaniciRolleri
    {
        public int BirimID { get; set; }
        public int NebisBirimID { get; set; }
        public string BirimAdi { get; set; }
        public string UygulamaAdi { get; set; }
        public string RolAdi { get; set; }
        public string RolAciklmasi { get; set; }
    }

    public class KullaniciRolListesi
    {
        public string KullaniciAdi { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public List<KullaniciRolleri> Roller { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
    }
}

