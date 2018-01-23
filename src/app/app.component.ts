import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TeamService]
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private use_email: String;

  constructor(public authService: AuthService, private router: Router) {
     this.authService.afAuth.auth.subscribe {
       (auth) => {
        if (auth == null) {
          //not logged in
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.use_email = '';
          this.router.navigate(['login-page']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.use_email = auth.google.email;
          this.router.navigate(['']);
        }
      }
    }
  }


