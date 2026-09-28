import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, interval, Observable, Subscription, tap } from 'rxjs';

import { jwtDecode } from 'jwt-decode';
import { TokenService } from './tokenservice';
import { ConstantsService } from './constants.service';
import { Router } from '@angular/router';
import { Kullanici } from '../models/kullanici.model';
import { ResponseAPI } from '../models/response.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class GirisService {
  kullanici: Kullanici = new Kullanici();
  tokenRefreshed: EventEmitter<number> = new EventEmitter<number>();

  public tokenGecerlilikSuresi: number | null = null;
  public timeDisplay: string = '00:00';
  private subscription: Subscription = new Subscription();
  public geriSayimVarMi: boolean = true;


  constructor(private http: HttpClient, private tokenService: TokenService, private constantsService: ConstantsService, private router: Router) { }

  apiUrl = '/api/auth'

  giris(tckimlikno: string, sifre: string, CaptchaResponse: string): Observable<ResponseAPI<Token>> {
    return this.http.post<ResponseAPI<Token>>(this.apiUrl + '/login', {
      tckimlikno,
      sifre,
      CaptchaResponse,
    }).pipe(
      finalize(() => {
      }),
      tap(response => {
        if (response.success) {
          const token = response.data.token;
          localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(response.data));
          this.tokenGecerlilikSuresi = this.tokenService.getTokenRemainingTime(token);
          this.tokenRefreshed.emit(this.tokenGecerlilikSuresi);
          this.gerisayim_baslat();
        }
      }, error => {
        console.error('Giriş işlemi başarısız:', error);
      })
    );
  }


 girisEdevletLogin(girisdurum: string): Observable<ResponseAPI<Token>> {
    return this.http.post<ResponseAPI<Token>>(this.apiUrl + '/loginedevlet?girisdurum='+girisdurum, { }).pipe(
      finalize(() => {
      }),
      tap(response => {
        if (response.success) {
          const token = response.data.token;
          localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(response.data));
          this.tokenGecerlilikSuresi = this.tokenService.getTokenRemainingTime(token);
          this.tokenRefreshed.emit(this.tokenGecerlilikSuresi);
          this.gerisayim_baslat();
        }
      }, error => {
        console.error('Giriş işlemi başarısız:', error);
      })
    );
  }

  refreshToken(userUid: string): Observable<ResponseAPI<Token>> {
    return this.http.post<ResponseAPI<Token>>(this.apiUrl + '/refreshtoken?useruid=' + userUid, {}).
      pipe(
        finalize(() => {
        }),
        tap(response => {
          if (response.success) {
            localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(response.data));
            const token = response.data.token;

            this.tokenGecerlilikSuresi = this.tokenService.getTokenRemainingTime(token);
            this.tokenRefreshed.emit(this.tokenGecerlilikSuresi);
            this.gerisayim_baslat();
          }
        }, error => {
          //       console.error('Token yenileme işlemi başarısız:', error);
        })
      );
  }



  gerisayim_baslat(): void {
    // Mevcut subscription'ı iptal et
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    var auth = localStorage.getItem(this.constantsService.APP_AUT);
    if (!this.geriSayimVarMi) {
      auth = localStorage.getItem(this.constantsService.APP_AUT_TOKENSIZ);
    }

    if (auth) {
      this.kullanici = jwtDecode(auth) as Kullanici;
      const token = JSON.parse(auth).token;
      this.updateTime();
      this.subscription = interval(1000).subscribe(() => {
        this.tokenGecerlilikSuresi = this.tokenService.getTokenRemainingTime(token);
        this.tokenGecerlilikSuresi! -= 1000;
        this.tokenRefreshed.emit(this.tokenGecerlilikSuresi!);
        this.updateTime();        
        if (this.tokenGecerlilikSuresi! <= 0 && this.subscription) {  
          this.cikis();
          this.subscription.unsubscribe();
        }
      });
    }
  }


  girisBilgi(): Kullanici {
    const auth = localStorage.getItem(this.constantsService.APP_AUT);
    if (auth != null) {
      this.kullanici = jwtDecode(auth) as Kullanici;
    }
    return this.kullanici;
  }

  cikis(): Observable<any> {
    localStorage.removeItem(this.constantsService.APP_AUT);
    this.router.navigate(['giris']);
    return this.http.get<any>('/api/auth/cikis');
  }


  private updateTime(): void {
    if (this.tokenGecerlilikSuresi === null) {
      return;
    } else {
      const minutes = Math.floor(this.tokenGecerlilikSuresi! / 60000);
      const seconds = Math.floor((this.tokenGecerlilikSuresi! % 60000) / 1000);
      this.timeDisplay = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
    }

  }
  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}


