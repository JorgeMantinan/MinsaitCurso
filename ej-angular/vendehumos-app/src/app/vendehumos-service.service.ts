import { Injectable } from '@angular/core';
import { Vendehumo } from './vendehumo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendehumosServiceService {

  vendehumos: Array<Vendehumo> = [];

  constructor(private http: HttpClient) { }

  getVendehumos() {
    return this.http.get<Vendehumo>(`${environment.BASE_URL_API}/vendehumos`, {
      headers: {
        'Authorization': '1234'
      }
    });
  }

  getUsuarios() {
    return this.http.get<Vendehumo>(`${environment.BASE_URL_API}/usuarios`, {
      headers: {
        'Authorization': '1234'
      }
    });
  }

}
