import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { GenelDataDto } from '../models/genelDataDto';
import { ResponseAPI } from '../models/response.model';
import { GridParams } from '../models/gridParams.model';


@Injectable({
  providedIn: 'root'
})


export class GenelService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  apiUrl = '/api/Home'

  sabitGetir(tip: string = '', kategoriId: number = 0): Observable<ResponseAPI<GenelDataDto[]>> {
    return this.http.get<ResponseAPI<GenelDataDto[]>>(`${this.apiUrl}/sabitGetir?tip=${tip}&kategoriId=${kategoriId}`);
  }

  isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  getDateFnc(item: any) {
    var tarih = formatDate(item!, 'dd-MM-yyyy HH:mm', 'en_US');
    return tarih;
  }

  getGridData(apiUrlGelen: string = '', gridParams: GridParams): Observable<ResponseAPI<any>> {
    return this.http.get<ResponseAPI<any>>(`${apiUrlGelen}/getGridData`, {
      params: {
        page: gridParams.page,
        pageSize: gridParams.pageSize,
        sortColumns: gridParams.sortColumns,
        sortDirections: gridParams.sortDirections,
        searchColumns: gridParams.searchColumns,
        searchValues: gridParams.searchValues,
      }
    });
  }

  getGridDataAra(apiUrlGelen: string = '', gridParams: GridParams): Observable<ResponseAPI<any>> {
    return this.http.get<ResponseAPI<any>>(`${apiUrlGelen}/getGridDataAra`, {
      params: {
        page: gridParams.page,
        pageSize: gridParams.pageSize,
        sortColumns: gridParams.sortColumns,
        sortDirections: gridParams.sortDirections,
        searchColumns: gridParams.searchColumns,
        searchValues: gridParams.searchValues,
        fakulteYoMyoEnstituId: gridParams.fakulteYoMyoEnstituId,
        birimId: gridParams.birimId,
        mezuniyetYil: gridParams.mezuniyetYil,
        secilenOgrenimTipArray: gridParams.secilenOgrenimTipArray,
        secilenCalismaDurumu: gridParams.secilenCalismaDurumu,
        secilenFotografDurumu: gridParams.secilenFotografDurumu
      }
    });
  }




  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array]);
    return blob;
  }

  base64ToBlob(base64: any, type: any) {
    const binStr = atob(base64);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
    return new Blob([arr], { type: type });
  }


  haraketRenk: any[] = [
    { id: 0, renk: "warning" },
    { id: 1, renk: "success" },
    { id: 2, renk: "danger" },
    { id: 3, renk: "primary" },
    { id: 4, renk: "" }
  ];


  success(mesaj: string) {
    this.toastr.success(mesaj);
  }
  error(mesaj: string) {
    this.toastr.error(mesaj, "UYARI");
  }
  info(mesaj: string) {
    this.toastr.info(mesaj, "UYARI");
  }

  swSuccess(mesaj: string) {
    Swal.fire({
      title: 'Başarılı!',
      text: mesaj,
      icon: 'success',
      confirmButtonText: 'Tamam'
    });
  }

  swError(mesaj: string) {
    Swal.fire({
      title: 'Hata!',
      text: mesaj,
      icon: 'error',
      confirmButtonText: 'Tamam'
    });
  }

  swWarning(mesaj: string) {
    Swal.fire({
      title: 'Uyarı!',
      text: mesaj,
      icon: 'warning',
      confirmButtonText: 'Tamam'
    });
  }

  swInfo(mesaj: string) {
    Swal.fire({
      title: 'Bilgi!',
      text: mesaj,
      icon: 'info',
      confirmButtonText: 'Tamam'
    });
  }





}
