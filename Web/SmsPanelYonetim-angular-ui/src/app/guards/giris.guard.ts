import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { GirisService } from '../services/giris.service';
import { YetkiService } from '../services/yetki.service';
import { ConstantsService } from '../services/constants.service';
import { Token } from '../models/token.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class GirisGuard implements CanActivate {
//   constructor(private router: Router, private girisService: GirisService, private yetkiService: YetkiService, private constantsService: ConstantsService) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     const auth = localStorage.getItem(this.constantsService.APP_AUT);
//     if (auth) {
//       const token = JSON.parse(auth) as Token;
//       if (route.data['roller']) {
//         for (const rol of route.data['roller'] as string[]) {
//           if (!this.yetkiService.yetkiVar(rol))
//             return false;
//         }
//       }
//       if (new Date(token.expiration).getTime() - (5 * 60 * 1000) > new Date().getTime()) {
//         return true;
//       } else {
//         return this.girisService.refreshToken(token.userUid).pipe(
//           map(res => {
//             localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(res.data));
//             return true;
//           }),
//           catchError(err => {
//             this.router.navigate(['giris']);
//             return of(false);
//           })
//         );
//       }
//     }
//     this.router.navigate(['giris']);
//     return false;
//   }
// }



@Injectable({
  providedIn: 'root'
})
export class GirisGuard implements CanActivate {
  constructor(
    private router: Router,
    private girisService: GirisService,
    private yetkiService: YetkiService,
    private constantsService: ConstantsService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = localStorage.getItem(this.constantsService.APP_AUT);

    if (auth) {
      const token = JSON.parse(auth) as Token;

      // ✅ ROL KONTROLÜ (OR mantığı)
      const requiredRoles = route.data['roller'] as string[];
      if (requiredRoles?.length) {
        const hasAnyRole = requiredRoles.some(role => this.yetkiService.yetkiVar(role));
        if (!hasAnyRole) {
          this.router.navigate(['giris']);
          return of(false);
        }
      }

      // ✅ TOKEN SÜRESİ KONTROLÜ
      if (new Date(token.expiration).getTime() - (5 * 60 * 1000) > new Date().getTime()) {
        return true;
      } else {
        // ✅ TOKEN YENİLEME
        return this.girisService.refreshToken(token.userUid).pipe(
          map(res => {
            localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(res.data));
            return true;
          }),
          catchError(err => {
            this.router.navigate(['giris']);
            return of(false);
          })
        );
      }
    }

    this.router.navigate(['giris']);
    return false;
  }
}

