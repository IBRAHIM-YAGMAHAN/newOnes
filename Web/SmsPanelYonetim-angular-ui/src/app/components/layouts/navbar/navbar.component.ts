import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AppYetkiDirective } from '../../../directives/yetkiDirective ';
import { CommonModule } from '@angular/common';
import { GirisService } from '../../../services/giris.service';
import { YetkiService } from '../../../services/yetki.service';
import { ConstantsService } from '../../../services/constants.service';
import { jwtDecode } from 'jwt-decode';
import { Kullanici } from '../../../models/kullanici.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private girisService: GirisService, public yetkiService: YetkiService,public constantsService: ConstantsService) { }
  ngOnInit(): void {
    const auth = localStorage.getItem(this.constantsService.APP_AUT);
    if (auth != null) {
      this.kullanici = jwtDecode(auth) as Kullanici;
    }
  }

  kullanici: Kullanici = new Kullanici();

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


