using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NEU.SmsPanelYonetim.Entities.Dtos
{

    public class Result
    {
        public int id { get; set; }
        public int type_id { get; set; }
        public int parent_id { get; set; }
        public string link_title { get; set; }
        public string link_desc { get; set; }
        public string link_href { get; set; }
        public int link_blank { get; set; }
        public List<Child> children { get; set; }
    }

    public class Child
    {
        public int id { get; set; }
        public int language_id { get; set; }
        public int department_id { get; set; }
        public int parent_id { get; set; }
        public int type_id { get; set; }
        public int link_order { get; set; }
        public string link_title { get; set; }
        public string link_desc { get; set; }
        public string link_href { get; set; }
        public int link_blank { get; set; }
        public int added_user { get; set; }
        public DateTime created_at { get; set; }
        public int? last_updated_user { get; set; }
        public DateTime updated_at { get; set; }
        public int status { get; set; }
    }


    public class WebFooterLinkDto
    {
        public int status { get; set; }
        public List<Result> results { get; set; }
    }

}
