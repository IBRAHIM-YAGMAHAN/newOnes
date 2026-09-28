using NEU.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NEU.Core.Entities.Concrete
{
    public class Kullanici:IEntity
    {
        [Key]
        public Int64 id { get; set; }
        public Int64 tckimlikno { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string aciklama { get; set; }
        public bool aktif { get; set; }
        public byte[] SifreSalt { get; set; }
        public byte[] SifreHash { get; set; }
        public string UserUid { get; set; }
        public Int64? idy { get; set; }
        public Int64? sdy { get; set; }
        public DateTime? idt { get; set; }
        public DateTime? sdt { get; set; }
        public string kullaniciAd { get; set; }

    }
    public class KullaniciKayit
    {
        public Kullanici kullanici { get; set; }
        public List<KullaniciRol> kullaniciRoller { get; set; }
    }

}

