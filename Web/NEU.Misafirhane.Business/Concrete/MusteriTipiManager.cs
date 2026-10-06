// Business\Concrete\MusteriTipiManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class MusteriTipiManager : IMusteriTipiService
    {
        private readonly IMusteriTipiDal _musteriTipiDal;

        public MusteriTipiManager(IMusteriTipiDal musteriTipiDal)
        {
            _musteriTipiDal = musteriTipiDal;
        }

        public IResult TAdd(MusteriTipi t)
        {
            try
            {
                _musteriTipiDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(MusteriTipi t)
        {
            try
            {
                _musteriTipiDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(MusteriTipi t)
        {
            try
            {
                _musteriTipiDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<MusteriTipi>> TGetList()
        {
            var liste = _musteriTipiDal.GetList();
            return new SuccessDataResult<List<MusteriTipi>>((List<MusteriTipi>)liste);
        }

        public IDataResult<MusteriTipi> TGetByID(int id)
        {
            var kayit = _musteriTipiDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<MusteriTipi>(kayit)
                : new ErrorDataResult<MusteriTipi>(Messages.KayitBulunamadi);
        }
    }
}