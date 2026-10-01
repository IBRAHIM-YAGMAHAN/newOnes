import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusaitOdaDto, OdaAramaDto } from '../models/rezervasyon.model';

interface ResponseAPI<T> {
  data: T;
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class RezervasyonService {
  apiUrl = '/api/Rezervasyon';

  constructor(private http: HttpClient) { }

  musaitOdalariGetir(arama: OdaAramaDto): Observable<ResponseAPI<MusaitOdaDto[]>> {
    return this.http.get<ResponseAPI<MusaitOdaDto[]>>(`${this.apiUrl}/musait-odalar`, {
      params: {
        GirisTarihi: arama.girisTarihi,
        CikisTarihi: arama.cikisTarihi,
        KisiSayisi: arama.kisiSayisi
      }
    });
  }
}
