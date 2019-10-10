import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../../_models/register/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = environment.serverUrl + 'countries';
  constructor(private http: HttpClient) { }



  getCountries(): Observable<ICountry[]> {
    return this.http
      .get<ICountry[]>(this.baseUrl)
      .pipe();
  }

}
