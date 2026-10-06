using DataAccess.Concrete;
using NEU.Core.DataAccess.EntityFramework;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;

namespace NEU.Misafirhane.DataAccess.EntityFramework
{
    public class EfRezervasyonDal : EfEntityRepositoryBase<Rezervasyon, Context>, IRezervasyonDal
    {
    }
}