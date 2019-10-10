import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICity } from '../../_models/register/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseUrl = environment.serverUrl + 'cities';
  constructor(private http: HttpClient) { }

  getCites(id: number): Observable<ICity[]> {
    return this.http
      .get<ICity[]>(`${this.baseUrl}/${id}`)
      .pipe();
  }
}
