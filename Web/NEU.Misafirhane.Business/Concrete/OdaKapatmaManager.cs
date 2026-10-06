// Business\Concrete\OdaKapatmaManager.cs
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace NEU.Misafirhane.Business.Concrete
{
    public class OdaKapatmaManager : IOdaKapatmaService
    {
        private readonly IOdaKapatmaDal _odaKapatmaDal;

        public OdaKapatmaManager(IOdaKapatmaDal odaKapatmaDal)
        {
            _odaKapatmaDal = odaKapatmaDal;
        }

        public IResult TAdd(OdaKapatma t)
        {
            try
            {
                _odaKapatmaDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(OdaKapatma t)
        {
            try
            {
                _odaKapatmaDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(OdaKapatma t)
        {
            try
            {
                _odaKapatmaDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<OdaKapatma>> TGetList()
        {
            var liste = _odaKapatmaDal.GetList();
            return new SuccessDataResult<List<OdaKapatma>>((List<OdaKapatma>)liste);
        }

        public IDataResult<OdaKapatma> TGetByID(int id)
        {
            var kayit = _odaKapatmaDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<OdaKapatma>(kayit)
                : new ErrorDataResult<OdaKapatma>(Messages.KayitBulunamadi);
        }
    }
}