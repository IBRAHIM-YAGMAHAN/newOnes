using FluentValidation;
using NEU.Misafirhane.Business.Container;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;

namespace NEU.Misafirhane.Business.ValidationRules.FluentValidation
{
    public class RezervasyonOlusturDtoValidator : AbstractValidator<RezervasyonOlusturDto>
    {
        public RezervasyonOlusturDtoValidator()
        {
            RuleFor(x => x.OdaId).GreaterThan(0);
            RuleFor(x => x.GirisTarihi).NotEmpty();
            RuleFor(x => x.CikisTarihi).NotEmpty();
            RuleFor(x => x.CikisTarihi)
                .GreaterThan(x => x.GirisTarihi)
                .WithMessage(Messages.CikisTarihiGiristenSonraOlmali);
            RuleFor(x => x.EkYatakSayisi).GreaterThanOrEqualTo(0);
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Misafirler).NotEmpty().WithMessage(Messages.MisafirSayisiEslesmiyor);
            RuleForEach(x => x.Misafirler).SetValidator(new MisafirDtoValidator());
        }
    }

    public class MisafirDtoValidator : AbstractValidator<MisafirDto>
    {
        public MisafirDtoValidator()
        {
            RuleFor(x => x.Ad).NotEmpty();
            RuleFor(x => x.Soyad).NotEmpty();
            RuleFor(x => x.TcKimlikNo)
                .NotEmpty()
                .Length(11).WithMessage(Messages.TcKimlikGecersiz)
                .Matches("^[0-9]{11}$").WithMessage(Messages.TcKimlikGecersiz);
        }
    }
}