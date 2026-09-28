using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Results
{
    public class Result:IResult
    {
        public Result(bool success, string message, Int64 recordCount) : this(success) // alttaki constructure ı da set eder.
        {
            Message = message;
            RecordCount = recordCount;
        }

        public Result(bool success)
        {
            Success = success;
        }
        public bool Success { get; }
        public string Message { get; }
        public Int64 RecordCount { get; }
    }
}
