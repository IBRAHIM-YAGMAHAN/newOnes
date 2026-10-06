using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NEU.Misafirhane.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class IlkKurulum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DataLog",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kullaniciid = table.Column<long>(type: "bigint", nullable: false),
                    tckimlikno = table.Column<long>(type: "bigint", nullable: false),
                    data = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tabloismi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tabloislem = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tarih = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataLog", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "MusteriTipleri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Aciklama = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MusteriTipleri", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OdaTipleri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Aciklama = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OdaTipleri", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ozellikler",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ad = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ozellikler", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OdaFiyatlari",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OdaTipiId = table.Column<int>(type: "int", nullable: false),
                    MusteriTipiId = table.Column<int>(type: "int", nullable: false),
                    GecelikFiyat = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    EkYatakGecelikFiyat = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    GecerlilikBaslangic = table.Column<DateOnly>(type: "date", nullable: false),
                    GecerlilikBitis = table.Column<DateOnly>(type: "date", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OdaFiyatlari", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OdaFiyatlari_MusteriTipleri_MusteriTipiId",
                        column: x => x.MusteriTipiId,
                        principalTable: "MusteriTipleri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OdaFiyatlari_OdaTipleri_OdaTipiId",
                        column: x => x.OdaTipiId,
                        principalTable: "OdaTipleri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Odalar",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OdaNo = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Aciklama = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AktifMi = table.Column<bool>(type: "bit", nullable: false),
                    OdaTipiId = table.Column<int>(type: "int", nullable: false),
                    NormalKapasite = table.Column<int>(type: "int", nullable: false),
                    MaksEkYatak = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Odalar", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Odalar_OdaTipleri_OdaTipiId",
                        column: x => x.OdaTipiId,
                        principalTable: "OdaTipleri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OdaKapatmalari",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OdaId = table.Column<int>(type: "int", nullable: false),
                    BaslangicTarihi = table.Column<DateOnly>(type: "date", nullable: false),
                    BitisTarihi = table.Column<DateOnly>(type: "date", nullable: false),
                    Sebep = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OlusturmaTarihi = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OdaKapatmalari", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OdaKapatmalari_Odalar_OdaId",
                        column: x => x.OdaId,
                        principalTable: "Odalar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OdaOzellikleri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OdaId = table.Column<int>(type: "int", nullable: false),
                    OzellikId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OdaOzellikleri", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OdaOzellikleri_Odalar_OdaId",
                        column: x => x.OdaId,
                        principalTable: "Odalar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OdaOzellikleri_Ozellikler_OzellikId",
                        column: x => x.OzellikId,
                        principalTable: "Ozellikler",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Yataklar",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OdaId = table.Column<int>(type: "int", nullable: false),
                    YatakNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Yataklar", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Yataklar_Odalar_OdaId",
                        column: x => x.OdaId,
                        principalTable: "Odalar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rezervasyonlar",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RezervasyonKodu = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OdaId = table.Column<int>(type: "int", nullable: false),
                    YatakId = table.Column<int>(type: "int", nullable: true),
                    KiralamaTipi = table.Column<int>(type: "int", nullable: false),
                    GirisTarihi = table.Column<DateOnly>(type: "date", nullable: false),
                    CikisTarihi = table.Column<DateOnly>(type: "date", nullable: false),
                    Durum = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OlusturmaTarihi = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EkYatakSayisi = table.Column<int>(type: "int", nullable: false),
                    MusteriTipiId = table.Column<int>(type: "int", nullable: true),
                    GecelikFiyat = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    EkYatakGecelikFiyat = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    GeceSayisi = table.Column<int>(type: "int", nullable: false),
                    ManuelIndirim = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    ToplamTutar = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rezervasyonlar", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rezervasyonlar_MusteriTipleri_MusteriTipiId",
                        column: x => x.MusteriTipiId,
                        principalTable: "MusteriTipleri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rezervasyonlar_Odalar_OdaId",
                        column: x => x.OdaId,
                        principalTable: "Odalar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rezervasyonlar_Yataklar_YatakId",
                        column: x => x.YatakId,
                        principalTable: "Yataklar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Faturalar",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RezervasyonId = table.Column<int>(type: "int", nullable: false),
                    FaturaNo = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FaturaTarihi = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AdSoyadUnvan = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adres = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VergiNoTcKimlik = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AraToplam = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    KdvOrani = table.Column<decimal>(type: "decimal(5,2)", precision: 5, scale: 2, nullable: false),
                    KdvTutari = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false),
                    GenelToplam = table.Column<decimal>(type: "decimal(10,2)", precision: 10, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faturalar", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Faturalar_Rezervasyonlar_RezervasyonId",
                        column: x => x.RezervasyonId,
                        principalTable: "Rezervasyonlar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Misafirler",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RezervasyonId = table.Column<int>(type: "int", nullable: false),
                    Ad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Soyad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TcKimlikNo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Misafirler", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Misafirler_Rezervasyonlar_RezervasyonId",
                        column: x => x.RezervasyonId,
                        principalTable: "Rezervasyonlar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Faturalar_FaturaNo",
                table: "Faturalar",
                column: "FaturaNo",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Faturalar_RezervasyonId",
                table: "Faturalar",
                column: "RezervasyonId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Misafirler_RezervasyonId",
                table: "Misafirler",
                column: "RezervasyonId");

            migrationBuilder.CreateIndex(
                name: "IX_OdaFiyatlari_MusteriTipiId",
                table: "OdaFiyatlari",
                column: "MusteriTipiId");

            migrationBuilder.CreateIndex(
                name: "IX_OdaFiyatlari_OdaTipiId",
                table: "OdaFiyatlari",
                column: "OdaTipiId");

            migrationBuilder.CreateIndex(
                name: "IX_OdaKapatmalari_OdaId",
                table: "OdaKapatmalari",
                column: "OdaId");

            migrationBuilder.CreateIndex(
                name: "IX_Odalar_OdaNo",
                table: "Odalar",
                column: "OdaNo",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Odalar_OdaTipiId",
                table: "Odalar",
                column: "OdaTipiId");

            migrationBuilder.CreateIndex(
                name: "IX_OdaOzellikleri_OdaId_OzellikId",
                table: "OdaOzellikleri",
                columns: new[] { "OdaId", "OzellikId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OdaOzellikleri_OzellikId",
                table: "OdaOzellikleri",
                column: "OzellikId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervasyonlar_MusteriTipiId",
                table: "Rezervasyonlar",
                column: "MusteriTipiId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervasyonlar_OdaId",
                table: "Rezervasyonlar",
                column: "OdaId");

            migrationBuilder.CreateIndex(
                name: "IX_Rezervasyonlar_RezervasyonKodu",
                table: "Rezervasyonlar",
                column: "RezervasyonKodu",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rezervasyonlar_YatakId",
                table: "Rezervasyonlar",
                column: "YatakId");

            migrationBuilder.CreateIndex(
                name: "IX_Yataklar_OdaId_YatakNo",
                table: "Yataklar",
                columns: new[] { "OdaId", "YatakNo" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataLog");

            migrationBuilder.DropTable(
                name: "Faturalar");

            migrationBuilder.DropTable(
                name: "Misafirler");

            migrationBuilder.DropTable(
                name: "OdaFiyatlari");

            migrationBuilder.DropTable(
                name: "OdaKapatmalari");

            migrationBuilder.DropTable(
                name: "OdaOzellikleri");

            migrationBuilder.DropTable(
                name: "Rezervasyonlar");

            migrationBuilder.DropTable(
                name: "Ozellikler");

            migrationBuilder.DropTable(
                name: "MusteriTipleri");

            migrationBuilder.DropTable(
                name: "Yataklar");

            migrationBuilder.DropTable(
                name: "Odalar");

            migrationBuilder.DropTable(
                name: "OdaTipleri");
        }
    }
}
