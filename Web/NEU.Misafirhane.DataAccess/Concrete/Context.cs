using Azure.Core;
using Microsoft.EntityFrameworkCore;
using NEU.Core.Entities.Concrete;
using NEU.Misafirhane.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete
{
    public class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Misafirhane;Trusted_Connection=True;TrustServerCertificate=True;");
        }


        public DbSet<DataLog> DataLog { get; set; }
        public DbSet<OdaTipi> OdaTipleri { get; set; }
        public DbSet<Oda> Odalar { get; set; }
        public DbSet<Yatak> Yataklar { get; set; }
        public DbSet<OdaKapatma> OdaKapatmalari { get; set; }
        public DbSet<Rezervasyon> Rezervasyonlar { get; set; }
        public DbSet<Misafir> Misafirler { get; set; }

        public DbSet<Ozellik> Ozellikler { get; set; }
        public DbSet<OdaOzellik> OdaOzellikleri { get; set; }
        public DbSet<MusteriTipi> MusteriTipleri { get; set; }
        public DbSet<OdaFiyat> OdaFiyatlari { get; set; }
        public DbSet<Fatura> Faturalar { get; set; }


        public DbSet<Odeme> Odemeler { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Oda>().HasIndex(o => o.OdaNo).IsUnique();
            modelBuilder.Entity<Yatak>().HasIndex(y => new { y.OdaId, y.YatakNo }).IsUnique();
            modelBuilder.Entity<Rezervasyon>().HasIndex(r => r.RezervasyonKodu).IsUnique();

            // SQL Server "multiple cascade paths" hatasını önlemek ve geçmişin silinmemesi için
            modelBuilder.Entity<Rezervasyon>()
             .HasOne(r => r.Oda).WithMany(o => o.Rezervasyonlar)
             .HasForeignKey(r => r.OdaId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Rezervasyon>()
            .HasOne(r => r.Yatak).WithMany()
            .HasForeignKey(r => r.YatakId).OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<OdaOzellik>().HasIndex(oo => new { oo.OdaId, oo.OzellikId }).IsUnique();

            modelBuilder.Entity<OdaOzellik>()
                .HasOne(oo => oo.Oda).WithMany(o => o.Ozellikler)
                .HasForeignKey(oo => oo.OdaId).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OdaOzellik>()
                .HasOne(oo => oo.Ozellik)
                .WithMany()
                .HasForeignKey(oo => oo.OzellikId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OdaFiyat>()
                .HasOne(f => f.OdaTipi).WithMany()
                .HasForeignKey(f => f.OdaTipiId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OdaFiyat>()
                .HasOne(f => f.MusteriTipi).WithMany()
                .HasForeignKey(f => f.MusteriTipiId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Rezervasyon>()
                .HasOne(r => r.MusteriTipi).WithMany()
                .HasForeignKey(r => r.MusteriTipiId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Fatura>().HasIndex(f => f.FaturaNo).IsUnique();

            modelBuilder.Entity<Fatura>()
                .HasOne(f => f.Rezervasyon).WithOne(r => r.Fatura)
                .HasForeignKey<Fatura>(f => f.RezervasyonId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OdaFiyat>().Property(f => f.GecelikFiyat).HasPrecision(10, 2);
            modelBuilder.Entity<OdaFiyat>().Property(f => f.EkYatakGecelikFiyat).HasPrecision(10, 2);
            modelBuilder.Entity<Rezervasyon>().Property(r => r.GecelikFiyat).HasPrecision(10, 2);
            modelBuilder.Entity<Rezervasyon>().Property(r => r.EkYatakGecelikFiyat).HasPrecision(10, 2);
            modelBuilder.Entity<Rezervasyon>().Property(r => r.ManuelIndirim).HasPrecision(10, 2);
            modelBuilder.Entity<Rezervasyon>().Property(r => r.ToplamTutar).HasPrecision(10, 2);
            modelBuilder.Entity<Fatura>().Property(f => f.AraToplam).HasPrecision(10, 2);
            modelBuilder.Entity<Fatura>().Property(f => f.KdvOrani).HasPrecision(5, 2);
            modelBuilder.Entity<Fatura>().Property(f => f.KdvTutari).HasPrecision(10, 2);
            modelBuilder.Entity<Fatura>().Property(f => f.GenelToplam).HasPrecision(10, 2);

            modelBuilder.Entity<Odeme>()
                .HasOne(o => o.Fatura).WithMany(f => f.Odemeler)
                .HasForeignKey(o => o.FaturaId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Odeme>().Property(o => o.Tutar).HasPrecision(10, 2);
        }
    }
}
