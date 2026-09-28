import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  //APP_PARAMS
  public readonly APP_NAME: string = 'Neü Mezun Uygulaması';
  public readonly APP_VERSION: string = '1.0.0';
  public readonly APP_BUILD: string = '1';
  public readonly APP_AUTHOR: string = 'Neü Mezun';
  public readonly APP_AUTHOR_EMAIL: string = '';
  public readonly APP_AUT: string = 'auth_mezun';
  public readonly APP_AUT_TOKENSIZ: string = 'auth_mezun_tokensiz';

  // TOKEN PARAMS
  public readonly TOKEN_PANIC: number = 3*60*1000;
  public readonly TOKEN_YENILENECEK_SURE: number = 10*60*1000;
  // DİĞER PARAMS


}
