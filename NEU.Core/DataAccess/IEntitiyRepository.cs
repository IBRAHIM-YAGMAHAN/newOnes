using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using NEU.Core.Entities;

namespace NEU.Core.DataAccess
{
    public interface IEntitiyRepository<T> where T:class,IEntity,new()
    {
        T Get(Expression<Func<T, bool>> filter);
        T GetByID(int id);
        IList<T> GetList(Expression<Func<T, bool>> filter = null);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Delete(Expression<Func<T, bool>> filter);
    }
}
