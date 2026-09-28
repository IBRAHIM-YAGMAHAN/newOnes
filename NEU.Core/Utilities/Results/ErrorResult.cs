using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Results
{
    public class ErrorResult : Result
    {
        public ErrorResult(string message) : base(false, message,0)
        {
        }

        public ErrorResult() : base(false)
        {
        }
    }
}
