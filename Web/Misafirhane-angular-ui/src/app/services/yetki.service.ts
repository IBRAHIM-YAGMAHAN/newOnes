import { Injectable } from '@angular/core';
import { GirisService } from './giris.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';

import { finalize } from 'rxjs';
import { ConstantsService } from './constants.service';
import { Token } from '../models/token.model';
import { Kullanici } from '../models/kullanici.model';


@Injectable({
  providedIn: 'root'
})
export class YetkiService {

  constructor(private toastr: ToastrService,
              public girisService: GirisService,
              private router: Router,
              private constantsService : ConstantsService) { }

  yetkiVar(yetkiler: string | string[]): boolean {
    if (typeof yetkiler == 'string') {
      yetkiler = yetkiler.split(',');
    }
    for (const yetki of yetkiler) {
      if (this.yetkiVarBirim(yetki, -1)) {
        return true;
      }
    }
    return false;
  }

  yetkiVarBirim(yetkiler: string, birimId: number): boolean {
    var gelenYetki_Birim = yetkiler + '-' + birimId;
    if (birimId == -1) {
      gelenYetki_Birim = yetkiler;
    }
    var authtoken = localStorage.getItem(this.constantsService.APP_AUT);
    if (authtoken == null || authtoken == '')
    {
      return false;
    }

    let token = JSON.parse(authtoken!) as Token;

    var jwttoken = jwtDecode(token.token) as Kullanici
    if (jwttoken.exp < Date.now() / 1000) {
      localStorage.removeItem(this.constantsService.APP_AUT);
      this.router.navigate(['giris']);
      return false;
    }   
    if (!(new Date(token.expiration).getTime() - (5* 60 * 1000) > new Date().getTime())) {
      this.girisService.refreshToken(token.userUid).pipe(finalize(() => {
      })).subscribe({
        next: res => {
          localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(res.data));
          token = JSON.parse(localStorage.getItem(this.constantsService.APP_AUT)!) as Token;
          return this.tokenKontrol(token.token,yetkiler,gelenYetki_Birim);

        },
        error: err => {
          localStorage.removeItem(this.constantsService.APP_AUT);
          this.router.navigate(['giris']);
          return false;
        }
      });
    }

    else{
      return this.tokenKontrol(token.token,yetkiler,gelenYetki_Birim);
    }
    return false;
    //cookie
    // const token = JSON.parse(this?.girisService.cookieByName()!) as Token;
  }

  tokenKontrol(token:string,yetkiler:string,gelenYetki_Birim:string):boolean{
    const roller = (jwtDecode(token) as Kullanici).Rol;
    var sonuc = false;
    for (const rol of roller) {
      if (rol.includes(gelenYetki_Birim) || rol.includes(yetkiler + '-0')) {
        sonuc = true;
        break;
      }
    }
    return sonuc;
  }

}
