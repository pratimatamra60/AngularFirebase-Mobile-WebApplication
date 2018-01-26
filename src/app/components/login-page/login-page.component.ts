import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error = null;
  email = '';
  pw = '';
  constructor(public authService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }


  loginUser() {
    this.authService.signin(this.email, this.pw);
  }

  login(loginWith: string) {
    this.authService.loginWith(loginWith);
  }

}
