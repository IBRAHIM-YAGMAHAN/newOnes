using NEU.Core.Entities;

namespace NEU.Misafirhane.Entities.Concrete
{
    public class OdaOzellik : IEntity
    {
        public int Id { get; set; }
        public int OdaId { get; set; }
        public int OzellikId { get; set; }

        public Oda Oda { get; set; } = null!;
        public Ozellik Ozellik { get; set; } = null!;
    }
}