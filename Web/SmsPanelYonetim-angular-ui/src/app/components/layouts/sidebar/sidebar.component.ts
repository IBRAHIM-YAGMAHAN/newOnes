import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { YetkiService } from '../../../services/yetki.service';
import { AppYetkiDirective } from '../../../directives/yetkiDirective ';
import { ConstantsService } from '../../../services/constants.service';

import { GirisService } from '../../../services/giris.service';
import { GenelService } from '../../../services/genel.service';
import { Kullanici } from '../../../models/kullanici.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, AppYetkiDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent implements OnInit {
  constructor(private router: Router, private girisService: GirisService,public yetkiService: YetkiService, public constantsService: ConstantsService,private genelService: GenelService) { }
  kullanici: Kullanici = new Kullanici();
  menuActive: string = "";

  ngOnInit(): void {
    const auth = localStorage.getItem(this.constantsService.APP_AUT);
    if (auth != null) {
      this.kullanici = jwtDecode(auth) as Kullanici;
    }
  }


  cikis() {
    this.girisService.cikis().subscribe({
      next: (res) => {
        localStorage.removeItem(this.constantsService.APP_AUT);
      },
      error: (err) => {
        this.router.navigate(['giris'], { queryParams: { deger: 'Cikis' } });

      },
      complete: () => {
        this.router.navigate(['giris'], { queryParams: { deger: 'Cikis' } });
      }
    });
  }
}

