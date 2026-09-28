using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Results
{
    public interface IResult
    {
        bool Success { get; }
        string Message { get; }
        Int64 RecordCount { get; }
    }
}
