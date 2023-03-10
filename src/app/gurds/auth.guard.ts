import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {

  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('Guard rejected!')
      this.router.navigate(['login']);
      return false;
    }
    console.log('passing through Guard')
    return true;
  }

}
