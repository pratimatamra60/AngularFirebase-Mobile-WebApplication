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
  public isLoggedIn: Boolean;
  public user_displayName: String;
  public use_email: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe( user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.use_email = '';
      } else {
        this.isLoggedIn = true;
      }
    });
  }
}
