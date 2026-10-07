// Business\Concrete\OdaFiyatManager.cs
using DataAccess.Concrete;
using NEU.Core.Utilities.Results;
using NEU.Misafirhane.Business.Abstract;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.DataAccess.Abstract;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NEU.Misafirhane.Business.Concrete
{
    public class OdaFiyatManager : IOdaFiyatService
    {
        private readonly IOdaFiyatDal _odaFiyatDal;

        private readonly Context _context;

        public OdaFiyatManager(IOdaFiyatDal odaFiyatDal, Context context)
        {
            _odaFiyatDal = odaFiyatDal;
            _context = context;
        }

        public IResult TAdd(OdaFiyat t)
        {
            try
            {
                var cakisanVarMi = _context.OdaFiyatlari.Any(f =>
                    f.OdaTipiId == t.OdaTipiId &&
                    f.MusteriTipiId == t.MusteriTipiId &&
                    f.GecerlilikBaslangic <= (t.GecerlilikBitis ?? DateOnly.MaxValue) &&
                    (f.GecerlilikBitis == null || f.GecerlilikBitis >= t.GecerlilikBaslangic));

                if (cakisanVarMi)
                    return new ErrorResult(Messages.FiyatTarihCakisiyor);

                _odaFiyatDal.Add(t);
                return new SuccessResult(Messages.KayitEklendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TUpdate(OdaFiyat t)
        {
            try
            {
                _odaFiyatDal.Update(t);
                return new SuccessResult(Messages.KayitGuncellendi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IResult TDelete(OdaFiyat t)
        {
            try
            {
                _odaFiyatDal.Delete(t);
                return new SuccessResult(Messages.KayitSilindi);
            }
            catch (Exception ex)
            {
                return new ErrorResult(string.Format(Messages.IslemHatasi, ex.Message));
            }
        }

        public IDataResult<List<OdaFiyat>> TGetList()
        {
            var liste = _odaFiyatDal.GetList();
            return new SuccessDataResult<List<OdaFiyat>>((List<OdaFiyat>)liste);
        }

        public IDataResult<OdaFiyat> TGetByID(int id)
        {
            var kayit = _odaFiyatDal.GetByID(id);
            return kayit != null
                ? new SuccessDataResult<OdaFiyat>(kayit)
                : new ErrorDataResult<OdaFiyat>(Messages.KayitBulunamadi);
        }
    }
}