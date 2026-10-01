import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RezervasyonService } from '../../services/rezervasyon.service';
import { MusaitOdaDto } from '../../models/rezervasyon.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-rezervasyon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rezervasyon.component.html',
  styleUrl: './rezervasyon.component.css'
})
export class RezervasyonComponent {
  girisTarihi: string = '';
  cikisTarihi: string = '';
  kisiSayisi: number = 2;

  aramaYapildi = false;
  yukleniyor = false;
  hataMesaji: string | null = null;
  musaitOdalar: MusaitOdaDto[] = [];

  bugun: string;
  maksTarih: string;

  constructor(private rezervasyonService: RezervasyonService) {
    const today = new Date();
    this.bugun = this.tariheCevir(today);

    const maks = new Date(today);
    maks.setDate(maks.getDate() + 15);
    this.maksTarih = this.tariheCevir(maks);

    this.girisTarihi = this.bugun;

    const yarin = new Date(today);
    yarin.setDate(yarin.getDate() + 1);
    this.cikisTarihi = this.tariheCevir(yarin);
  }

  private tariheCevir(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  kriterDegisti(): void {
    this.aramaYapildi = false;
    this.musaitOdalar = [];
    this.hataMesaji = null;
  }

  ara(): void {
    this.hataMesaji = null;

    if (!this.girisTarihi || !this.cikisTarihi) {
      this.hataMesaji = 'Lütfen giriş ve çıkış tarihi seçin.';
      return;
    }
    if (this.cikisTarihi <= this.girisTarihi) {
      this.hataMesaji = 'Çıkış tarihi giriş tarihinden sonra olmalıdır.';
      return;
    }

    this.musaitOdalar = [];
    this.yukleniyor = true;
    this.aramaYapildi = true;

    this.rezervasyonService.musaitOdalariGetir({
      girisTarihi: this.girisTarihi,
      cikisTarihi: this.cikisTarihi,
      kisiSayisi: this.kisiSayisi
    }).pipe(
      finalize(() => this.yukleniyor = false)
    ).subscribe({
      next: (res) => {
        this.musaitOdalar = res.data;
      },
      error: (err) => {
        this.hataMesaji = err?.error?.message || 'Odalar getirilirken bir hata oluştu.';
        this.musaitOdalar = [];
      }
    });
  }
}
