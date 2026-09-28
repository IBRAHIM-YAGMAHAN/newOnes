import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../models/response.model';


@Injectable({
  providedIn: 'root'
})
export class AnasayfaService {
  apiUrl = '/api/home';

  constructor(private http: HttpClient) {

  }



  footerLinks(): Observable<ResponseAPI<any>> {
    return this.http.get<ResponseAPI<any>>(this.apiUrl + '/footerLinks');
  }



}