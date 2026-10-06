// Business\Concrete\OdaManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class OdaManager : IOdaService
    {
        private readonly IOdaDal _odaDal;

        public OdaManager(IOdaDal odaDal)
        {
            _odaDal = odaDal;
        }

        public IResult TAdd(Oda t)
        {
            try
            {
                _odaDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(Oda t)
        {
            try
            {
                _odaDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(Oda t)
        {
            try
            {
                _odaDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<Oda>> TGetList()
        {
            var liste = _odaDal.GetList();
            return new SuccessDataResult<List<Oda>>((List<Oda>)liste);
        }

        public IDataResult<Oda> TGetByID(int id)
        {
            var kayit = _odaDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<Oda>(kayit)
                : new ErrorDataResult<Oda>(Messages.KayitBulunamadi);
        }
    }
}