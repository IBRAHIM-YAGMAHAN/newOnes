using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Results
{
    public class SuccessResult : Result
    {
        public SuccessResult(string message) : base(true, message,0)
        {
        }

        public SuccessResult(string message, Int64 recordCount) : base(true, message, recordCount)
        {
        }
        public SuccessResult() : base(true)
        {
        }
    }
}
