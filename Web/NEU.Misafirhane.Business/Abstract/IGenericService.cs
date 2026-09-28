using NEU.Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace NEU.Misafirhane.Business.Abstract
{
    public interface IGenericService<T>
    {
        IResult TAdd(T t);
        IResult TDelete(T t);
        IResult TUpdate(T t);
        IDataResult<List<T>> TGetList();
        IDataResult<T> TGetByID(int id);
        //List<T> GetByFilter(Expression<Func<T, bool>> filter);
    }
}