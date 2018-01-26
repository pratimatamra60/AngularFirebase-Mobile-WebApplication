import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = '';
  pw = '';
  constructor(public authservice: AuthService) { }
  ngOnInit() {
  }

  signup() {
   this.authservice.signup(this.email, this.pw);
  }

}
