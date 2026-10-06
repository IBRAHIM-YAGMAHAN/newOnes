// Business\Concrete\OzellikManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class OzellikManager : IOzellikService
    {
        private readonly IOzellikDal _ozellikDal;

        public OzellikManager(IOzellikDal ozellikDal)
        {
            _ozellikDal = ozellikDal;
        }

        public IResult TAdd(Ozellik t)
        {
            try
            {
                _ozellikDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(Ozellik t)
        {
            try
            {
                _ozellikDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(Ozellik t)
        {
            try
            {
                _ozellikDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<Ozellik>> TGetList()
        {
            var liste = _ozellikDal.GetList();
            return new SuccessDataResult<List<Ozellik>>((List<Ozellik>)liste);
        }

        public IDataResult<Ozellik> TGetByID(int id)
        {
            var kayit = _ozellikDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<Ozellik>(kayit)
                : new ErrorDataResult<Ozellik>(Messages.KayitBulunamadi);
        }
    }
}