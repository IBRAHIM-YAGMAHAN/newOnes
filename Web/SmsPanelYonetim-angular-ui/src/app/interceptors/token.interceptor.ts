import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { GirisService } from '../services/giris.service';
import { TokenService } from '../services/tokenservice';
import { ConstantsService } from '../services/constants.service';

//@Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor() { }
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const auth = localStorage.getItem('auth');
//     if (auth) {
//       request = request.clone({
//         setHeaders: { 'Authorization': 'Bearer ' + (JSON.parse(auth) as Token).token }
//       });
//     }
//     return next.handle(request);
//   }
// }


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private girisService: GirisService,
    private constantsService: ConstantsService) { }

  private sureazaldi: boolean = false;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const auth = localStorage.getItem(this.constantsService.APP_AUT);
    if (!auth) {
      return next.handle(request);
    }

    const authData = JSON.parse(auth);
    let tokenRemainingTime = this.girisService.tokenGecerlilikSuresi;

    if (tokenRemainingTime! < this.constantsService.TOKEN_YENILENECEK_SURE && !this.sureazaldi) {
      this.sureazaldi = true;
      this.girisService.refreshToken(authData.userUid).subscribe((res: any) => {
        this.sureazaldi = false;
      });
    }

    // Token süresi yeterliyse, mevcut token ile devam et
    const clonedRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${authData.token}` },
    });

    return next.handle(clonedRequest);
  }
}

