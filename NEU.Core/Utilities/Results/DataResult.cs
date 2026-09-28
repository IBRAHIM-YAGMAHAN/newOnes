using System;
using System.Collections.Generic;
using System.Text;

namespace NEU.Core.Utilities.Results
{
    public class DataResult<T> : Result, IDataResult<T>
    {
        public DataResult(T data, bool success, string message) : base(success, message,0)
        {
            Data = data;
        }

        public DataResult(T data, bool success, string message,int recordcount) : base(success, message, recordcount)
        {
            Data = data;
        }

        public DataResult(T data, bool success) : base(success)
        {
            Data = data;
        }

        public T Data { get; }
    }
}
