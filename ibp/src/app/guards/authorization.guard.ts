import { Injectable } from '@angular/core';
import { CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  redirectUrl;
  constructor(
    private authSevice: UsersService,
    private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {

    if (this.authSevice.checkUserLoggedIn()) {
      return true;
    } else {
      this.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}
