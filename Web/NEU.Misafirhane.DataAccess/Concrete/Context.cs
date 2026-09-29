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
        }
    }
}
