using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using Azure.Core;
using NEU.Core.Entities.Concrete;

namespace DataAccess.Concrete
{
    public class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=NeuMezunBilgi;Trusted_Connection=True;TrustServerCertificate=True;");
        }


        public DbSet<DataLog> DataLog { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            //modelBuilder.Entity<Icerik>()
            // .HasOne(i => i.Uye)
            // .WithMany(s => s.Icerikler)
            // .HasForeignKey(i => i.UyeId);
            //.OnDelete(DeleteBehavior.Restrict);

        }
    }
}
