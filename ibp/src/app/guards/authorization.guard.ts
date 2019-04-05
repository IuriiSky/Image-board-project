import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private authSevice: UsersService,
    private router: Router) {}

  canActivate() {
    if (this.authSevice.checkUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
