import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router) {

}

canActivate() {
  return this.authService.isLoggedin();
}
}
