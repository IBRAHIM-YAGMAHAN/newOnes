// Business\Concrete\YatakManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class YatakManager : IYatakService
    {
        private readonly IYatakDal _yatakDal;

        private readonly Context _context;

        public YatakManager(IYatakDal yatakDal, Context context)
        {
            _yatakDal = yatakDal;
            _context = context;
        }

        public IResult TAdd(Yatak t)
        {
            try
            {
                var oda = _context.Odalar.Include(o => o.Yataklar).FirstOrDefault(o => o.Id == t.OdaId);
                if (oda == null)
                    return new ErrorResult(Messages.OdaBulunamadi);
                if (oda.Yataklar.Count >= oda.NormalKapasite)
                    return new ErrorResult(Messages.YatakKapasiteAsildi);

                _yatakDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }
        public IResult TUpdate(Yatak t)
        {
            try
            {
                _yatakDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(Yatak t)
        {
            try
            {
                _yatakDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<Yatak>> TGetList()
        {
            var liste = _yatakDal.GetList();
            return new SuccessDataResult<List<Yatak>>((List<Yatak>)liste);
        }

        public IDataResult<Yatak> TGetByID(int id)
        {
            var kayit = _yatakDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<Yatak>(kayit)
                : new ErrorDataResult<Yatak>(Messages.KayitBulunamadi);
        }
    }
}