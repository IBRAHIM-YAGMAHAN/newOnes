import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getTokenRemainingTime(token: string): number {
    try {
      const decoded: any = jwtDecode(token);
      if (!decoded || !decoded.exp) {
        return 0;
      }
      const exp = decoded.exp * 1000; // exp saniye cinsinden → ms
      const now = Date.now();
      return exp - now; // kalan süre (ms)
    } catch (e) {
      return 0;
    }
  }

}
