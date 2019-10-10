import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/common/_models/login/login';
import { AuthService } from 'src/app/common/_services/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 
  model = {} as ILogin;
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
