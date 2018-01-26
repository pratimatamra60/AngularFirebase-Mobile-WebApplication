import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['login-page']);
    });
  }
}
