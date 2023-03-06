import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface quotePayload {
  email: string;
  nombreCompleto: string;
  idDistribuidor: string;
  paginaAuto: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly api_url = 'https://leasemd-dev.azure-api.net';

  constructor(private http: HttpClient) { }

  getCotizacion(payload: quotePayload): Observable<any> {
    return this.http.post(`${this.api_url}/front-test/cotizacion`, payload, {responseType: 'text'});
    // const mock = [{
    //   msg: 'ok',
    //   status: 200
    // }]
    // return of(mock);
  }

  getDistList(): Observable<any> {
   return this.http.get(`${this.api_url}/front-test/distribuidores`);
  }

}
