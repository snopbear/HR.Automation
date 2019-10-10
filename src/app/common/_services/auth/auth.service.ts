import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../../_models/login/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.serverUrl;

  

  constructor(private http: HttpClient) { }



  login(loginModel: ILogin): Observable<ILogin> {
    return this.http
      .post<ILogin>(this.baseUrl + 'login', loginModel)
      .pipe();
  }

  register(loginModel: ILogin): Observable<ILogin> {
    return this.http
      .post<ILogin>(this.baseUrl + 'register', loginModel)
      .pipe();
  }

}
