import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request, next) {
    const authService = this.injector.get(UsersService)
    const tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
