import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable()
export class NotauthGuard implements CanActivate {
  constructor(
    private authSevice: UsersService,
    private router: Router) {}

  canActivate() {
    if (this.authSevice.checkUserLoggedIn()) {
      this.router.navigate(['/me']);
      return false;
    } else {
      // this.router.navigate(['/login']);
      return true;
    }
  }
}
