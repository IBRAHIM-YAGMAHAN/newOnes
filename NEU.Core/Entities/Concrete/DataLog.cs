using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NEU.Core.Entities.Concrete
{
    public class DataLog : IEntity
    {
        [Key]
        public Int64 id { get; set; }
        public Int64 kullaniciid { get; set; }
        public Int64 tckimlikno { get; set; }
        public string data { get; set; }
        public string ip { get; set; }
        public string tabloismi { get; set; }
        public string tabloislem { get; set; }
        public DateTime tarih { get; set; }
    }
}
