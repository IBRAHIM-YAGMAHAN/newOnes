// EntityFramework/EfOdaFiyatDal.cs
using DataAccess.Concrete;
using NEU.Core.DataAccess.EntityFramework;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;

namespace NEU.Misafirhane.DataAccess.EntityFramework
{
    public class EfOdaFiyatDal : EfEntityRepositoryBase<OdaFiyat, Context>, IOdaFiyatDal
    {
    }
}