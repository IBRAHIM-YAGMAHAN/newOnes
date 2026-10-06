using NEU.Core.Entities;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class MusteriTipi : IEntity
    {
        public int Id { get; set; }
        public string Ad { get; set; } = string.Empty;
        public string? Aciklama { get; set; }
    }
}