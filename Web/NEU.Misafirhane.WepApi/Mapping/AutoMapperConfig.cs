using AutoMapper;
namespace NEU.Misafirhane.WepApi.Mapping
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {

            //        CreateMap<Kategori, KategoriDto>()
            //.ForMember(dest => dest.OzellikAdi, opt => opt.MapFrom(src => src.KaynakOzellik));

           // CreateMap<UyeAddDto, Uye>().ReverseMap();
        }
    }
}
