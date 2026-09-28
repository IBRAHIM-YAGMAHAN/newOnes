using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NEU.Misafirhane.Entities.Dtos
{
    public class ObsBilgiDto
    {
        public class SonucOzlukList
        {
            public bool sonucDurum { get; set; }
            public string sonucAciklama { get; set; }
            public string kayitSayisi { get; set; }
            public List<OzlukList> ozluk { get; set; }
        }
        public class OzlukList
        {
            public string OGR_NO { get; set; }
            public string OGR_NO_ONCK { get; set; }
            public string TCK { get; set; }
            public string PASAPORT_NO { get; set; }
            public string AD { get; set; }
            public string SOYAD { get; set; }
            [NotMapped]
            public string CINSIYET { get; set; }
            public string IL_AD { get; set; }
            public string ILCE_AD { get; set; }
            public string ULKE { get; set; }
            public string FAK_KOD { get; set; }
            [NotMapped]
            public string FAK_AD { get; set; }
            public string BOL_ID { get; set; }
            [NotMapped]
            public string BOL_AD { get; set; }
            public string PROG_ID { get; set; }
            [NotMapped]
            public string PROG_AD { get; set; }
            public string SINIF { get; set; }
            public string KAY_NEDEN { get; set; }
            public string KAY_TAR { get; set; }
            public string OGRENIM_DURUM { get; set; }
            [NotMapped]
            public string OGRENIM_DURUM_AD { get; set; }
            public string OGRENIM_TIP { get; set; }
            [NotMapped]
            public string OGRENIM_TIP_AD { get; set; }
            public string AYR_TAR { get; set; }
            public string ILAVE_DONEM { get; set; }
            public string HAZ_DURUM { get; set; }
            public string CAP_DURUM { get; set; }
            public string DAN_TC { get; set; }
            public string DAN_AD_SOYAD { get; set; }
            public string DAN_DIG_TC { get; set; }
            public string DAN_DIG_AD_SOYAD { get; set; }
            public string DIPLOMA_AD { get; set; }
            public string PROGRAM_TIP { get; set; }
            public string DURUM { get; set; }
            public string FOTO_URL { get; set; }
            public string DOGUM_TAR { get; set; }
            [NotMapped]
            public string DOGUM_YER { get; set; }
            public string OKUDUGU_YARIL_YIL { get; set; }
            public string KAY_DON_SAY { get; set; }
            public string OSYM_YIL { get; set; }
            public string AGNO { get; set; }
            public string SON_DEG_TAR { get; set; }


        }


        public class SonucFotoList
        {
            public bool sonucDurum { get; set; }
            public string? sonucAciklama { get; set; }
            public List<OgrenciFoto> ogrencifoto { get; set; }
        }

        public class OgrenciFoto
        {
            public string? OGR_NO { get; set; }
            public string? FOTO_URL { get; set; }


        }
    }

}
