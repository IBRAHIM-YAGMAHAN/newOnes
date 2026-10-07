using FluentValidation;
using NEU.Misafirhane.Dto.Dtos.RezervasyonDtoFolder;

namespace NEU.Misafirhane.Business.ValidationRules.FluentValidation
{
    public class OdaAramaDtoValidator : AbstractValidator<OdaAramaDto>
    {
        public OdaAramaDtoValidator()
        {
            RuleFor(x => x.GirisTarihi).NotEmpty();
            RuleFor(x => x.CikisTarihi).NotEmpty();
            RuleFor(x => x.KisiSayisi).GreaterThanOrEqualTo(1);
        }
    }
}