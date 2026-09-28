using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace NEU.SmsPanelYonetim.Entities.Dtos.GenelDtoFolder
{
    public class SmsParametreOtpDto
    {
        public SmsParametreOtpDto()
        {
            this.Username = "neu.otp";
            this.Password = "N4E8K2A7";
            this.Origin = "NEU";
        }

        public string Telefon { get; set; }
        public string Mesaj { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Origin { get; set; }

    }

    public class SmsApiParam
    {
        public long? numberSingle = null; 
        public List<NumberInfo> numberContents { get; set; }
        public List<long> numberList = new List<long>();
        public string content = "";
        public string authKey = "";
        public string sender = "";
    }
    public class NumberInfo
    {
        public long nr { get; set; }
        public string msg { get; set; }
    }
    public class SmsResponseFink
    {
        public ErrorResponse Err { get; set; } = null;
        public PackageData Data { get; set; } = null;
    }

    public class PackageData
    {
        public int PkgID { get; set; }
    }

    public class ErrorResponse
    {
        public string Code { get; set; } = string.Empty;
        public int Status { get; set; }
        public string Message { get; set; } = string.Empty;
    }
}
