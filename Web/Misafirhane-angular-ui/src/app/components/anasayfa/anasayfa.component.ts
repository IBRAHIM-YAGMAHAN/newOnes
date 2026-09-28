import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YetkiService } from '../../services/yetki.service';
import { Router } from '@angular/router';
import { AnasayfaService } from '../../services/anasayfa.service';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { DomSanitizer } from '@angular/platform-browser';
import { GenelService } from '../../services/genel.service';

declare var bootstrap: any;

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css',
  providers: [Lightbox] // <-- Bunu ekleyin

})
export class AnasayfaComponent {
  constructor(private yetkiService: YetkiService, private router: Router,
  
    private anasayfaService: AnasayfaService,

    private lightbox: Lightbox,
    private genelService: GenelService,private sanitizer: DomSanitizer) {
  }

  yukleniyor = false;

  ngOnInit(): void {

  }

  hatalar: any = {};
  hataYazdir: any[] = [];
  breadcrumbs: Array<{ label: string, url: string }> = [];


  private hataYonet(err: any) {
    this.hatalar = {};
    this.hatalar = err.error.errors;
    this.hataYazdir = [];
    for (let key in this.hatalar) {
      let hata = this.hatalar[key];
      this.genelService.error(hata[0])
      this.hataYazdir.push(this.hatalar[key]);
    }
    if (err.error?.message && err.error?.message != "") { this.genelService.swError(err.error?.message) };
  }




  closeLightbox(): void {
    this.lightbox.close();
  }



}
