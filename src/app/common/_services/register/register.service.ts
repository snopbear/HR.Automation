import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../../_models/register/country';
import { ICity } from '../../_models/register/city';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // baseUrl = environment.serverUrl;
  // constructor(private http: HttpClient) { }



  // getCountries(): Observable<ICountry[]> {
  //   return this.http
  //     .get<ICountry[]>(this.baseUrl + 'countries')
  //     .pipe();
  // }


  // getCites(id: number): Observable<ICity[]> {
  //   return this.http
  //     .get<ICity[]>(`${this.baseUrl}"cities"/${id}`)
  //     .pipe();
  // }



}
