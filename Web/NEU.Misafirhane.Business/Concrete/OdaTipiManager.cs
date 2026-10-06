// Business\Concrete\OdaTipiManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class OdaTipiManager : IOdaTipiService
    {
        private readonly IOdaTipiDal _odaTipiDal;

        public OdaTipiManager(IOdaTipiDal odaTipiDal)
        {
            _odaTipiDal = odaTipiDal;
        }

        public IResult TAdd(OdaTipi t)
        {
            try
            {
                _odaTipiDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(OdaTipi t)
        {
            try
            {
                _odaTipiDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(OdaTipi t)
        {
            try
            {
                _odaTipiDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<OdaTipi>> TGetList()
        {
            var liste = _odaTipiDal.GetList();
            return new SuccessDataResult<List<OdaTipi>>((List<OdaTipi>)liste);
        }

        public IDataResult<OdaTipi> TGetByID(int id)
        {
            var kayit = _odaTipiDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<OdaTipi>(kayit)
                : new ErrorDataResult<OdaTipi>(Messages.KayitBulunamadi);
        }
    }
}