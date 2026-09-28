using Microsoft.EntityFrameworkCore;
using NEU.Core.Entities;
using NEU.Core.Entities.Concrete;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Data;

namespace NEU.Core.DataAccess.EntityFramework
{
    public class EfEntityRepositoryBase<T, TContext> : IEntitiyRepository<T>
       where T : class, IEntity, new()
        where TContext : DbContext, new()
    {


        public void Add(T entity)
        {
            using (var context = new TContext())
            {
                context.Entry(entity).State = EntityState.Added;
                context.SaveChanges();
                if (DataLogParametreler.InsertLog)
                {
                    string jsonSayfaData = JsonConvert.SerializeObject(entity, Formatting.Indented);
                    UserInfo userInfo = new UserInfo();
                    var entityType = context.Model.FindEntityType(entity.ToString());

                    var relationalData = entityType.GetAnnotations()
                               .FirstOrDefault(a => a.Name == "Relational:TableName");
                    var tableName = relationalData?.Value?.ToString();

                    var schemaData = entityType.GetAnnotations()
                                               .FirstOrDefault(a => a.Name == "Relational:Schema");
                    var schema = schemaData?.Value?.ToString() ?? "dbo";


                    DataLog dataLog = new DataLog();
                    dataLog.id = 0;
                    dataLog.ip = userInfo.ipAdres();
                    dataLog.tarih = DateTime.Now;
                    dataLog.tckimlikno = userInfo.UserTCKimlikNo();
                    dataLog.kullaniciid = userInfo.UserKullaniciid();
                    dataLog.data = jsonSayfaData;
                    dataLog.tabloismi = tableName; // entity.ToString();
                    dataLog.tabloislem = "Insert";
                    context.Entry(dataLog).State = EntityState.Added;
                    context.SaveChanges();
                }

            }
        }

        public void Delete(T entity)
        {
            using (var context = new TContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Deleted;
                context.SaveChanges();

                if (DataLogParametreler.DeleteLog)
                {
                    string jsonSayfaData = JsonConvert.SerializeObject(entity, Formatting.Indented);
                    UserInfo userInfo = new UserInfo();
                    var entityType = context.Model.FindEntityType(entity.ToString());
                    var relationalData = entityType.GetAnnotations()
                             .FirstOrDefault(a => a.Name == "Relational:TableName");
                    var tableName = relationalData?.Value?.ToString();

                    var schemaData = entityType.GetAnnotations()
                                               .FirstOrDefault(a => a.Name == "Relational:Schema");
                    var schema = schemaData?.Value?.ToString() ?? "dbo";

                    DataLog dataLog = new DataLog();
                    dataLog.id = 0;
                    dataLog.ip = userInfo.ipAdres();
                    dataLog.tarih = DateTime.Now;
                    dataLog.tckimlikno = userInfo.UserTCKimlikNo();
                    dataLog.kullaniciid = userInfo.UserKullaniciid();
                    dataLog.data = jsonSayfaData;
                    dataLog.tabloismi = tableName; // entity.ToString();
                    dataLog.tabloislem = "Delete";
                    context.Entry(dataLog).State = EntityState.Added;
                    context.SaveChanges();
                }
            }
        }

        public void Delete(Expression<Func<T, bool>> filter)
        {
            using (var context = new TContext())
            {
                var dbSet = context.Set<T>();
                context.RemoveRange(dbSet.Where(filter));
                context.SaveChanges();

                if (DataLogParametreler.DeleteLog)
                {
                    UserInfo userInfo = new UserInfo();
                    var entityName = ((System.Linq.IQueryable)dbSet).ElementType.FullName ?? "";
                    var entityType = context.Model.FindEntityType(entityName);
                    var relationalData = entityType.GetAnnotations()
                                   .FirstOrDefault(a => a.Name == "Relational:TableName");
                    var tableName = relationalData?.Value?.ToString();

                    var schemaData = entityType.GetAnnotations()
                                               .FirstOrDefault(a => a.Name == "Relational:Schema");
                    var schema = schemaData?.Value?.ToString() ?? "dbo";
                    DataLog dataLog = new DataLog();
                    dataLog.id = 0;
                    dataLog.ip = userInfo.ipAdres();
                    dataLog.tarih = DateTime.Now;
                    dataLog.tckimlikno = userInfo.UserTCKimlikNo();
                    dataLog.kullaniciid = userInfo.UserKullaniciid();
                    dataLog.data = "" + filter;
                    dataLog.tabloismi = tableName; // entity.ToString();
                    dataLog.tabloislem = "Delete2";
                    context.Entry(dataLog).State = EntityState.Added;
                    context.SaveChanges();
                }
            }
        }

        public T Get(Expression<Func<T, bool>> filter)
        {
            using (var context = new TContext())
            {
                var dbSet = context.Set<T>();
                var sonuc = dbSet.Where(filter).FirstOrDefault();
                return sonuc;
            }
        }

        public T GetByID(int id)
        {
            using (var context = new TContext())
            {
                return context.Set<T>().Find(id);
            }
        }

        public IList<T> GetList(Expression<Func<T, bool>> filter = null)
        {
            using (var context = new TContext())
            {
                var dbSet = context.Set<T>();
                return
                  filter == null
                     ? dbSet.ToList()
                     : dbSet.Where(filter).AsNoTracking().ToList();
            }
        }

        public void Update(T entity)
        {
            using (var context = new TContext())
            {
                if (DataLogParametreler.UpdateLog)
                {
                    string jsonSayfaData = JsonConvert.SerializeObject(entity, Formatting.Indented);
                    UserInfo userInfo = new UserInfo();
                    var entityType = context.Model.FindEntityType(entity.ToString());

                    var relationalData = entityType.GetAnnotations()
                    .FirstOrDefault(a => a.Name == "Relational:TableName");
                    var tableName = relationalData?.Value?.ToString();

                    var schemaData = entityType.GetAnnotations()
                                               .FirstOrDefault(a => a.Name == "Relational:Schema");
                    var schema = schemaData?.Value?.ToString() ?? "dbo";


                    DataLog dataLog = new DataLog();
                    dataLog.id = 0;
                    dataLog.ip = userInfo.ipAdres();
                    dataLog.tarih = DateTime.Now;
                    dataLog.tckimlikno = userInfo.UserTCKimlikNo();
                    dataLog.kullaniciid = userInfo.UserKullaniciid();
                    dataLog.data = jsonSayfaData;
                    dataLog.tabloismi = tableName; // entity.ToString();
                    dataLog.tabloislem = "Update";

                    context.Entry(dataLog).State = EntityState.Added;
                    context.SaveChanges();
                }
                context.Entry(entity).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}
