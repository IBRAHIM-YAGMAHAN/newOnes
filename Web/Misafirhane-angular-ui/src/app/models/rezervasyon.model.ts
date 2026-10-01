export interface OdaAramaDto {
  girisTarihi: string;
  cikisTarihi: string;
  kisiSayisi: number;
}

export interface MusaitYatakDto {
  yatakId: number;
  yatakNo: number;
}

export interface MusaitOdaDto {
  odaId: number;
  odaNo: string;
  odaTipi: string;
  normalKapasite: number;
  maksEkYatak: number;
  tumOdaMusait: boolean;
  ekYatakGerekli: number;
  musaitYataklar: MusaitYatakDto[];
}
