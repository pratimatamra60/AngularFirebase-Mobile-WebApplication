import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: Boolean;
  public user_displayName: String;
  public use_email: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe( user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.use_email = '';
        // this.router.navigate(['login-page']);
      } else {
        this.isLoggedIn = true;
        this.user_displayName = user.displayName;
        this.use_email = user.email;
        // this.router.navigate(['home']);
      }
    });
  }
  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['login-page']);
    });
  }

  ngOnInit() {
  }
}
