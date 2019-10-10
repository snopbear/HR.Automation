import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import {ILogin } from 'src/app/core/_models/login/login';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 
  model = <ILogin>{};
  constructor(private _authService: AuthService) { }

  ngOnInit() { }


  login() {
    this._authService.login(this.model).subscribe(
      (res: ILogin) => {
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      },
      () => { }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  loggOut() {
    localStorage.removeItem('token');
  }

}
