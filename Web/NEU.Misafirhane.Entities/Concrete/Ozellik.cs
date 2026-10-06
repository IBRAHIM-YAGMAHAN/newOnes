using NEU.Core.Entities;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class Ozellik : IEntity
    {
        public int Id { get; set; }
        public string Ad { get; set; } = string.Empty;
    }
}