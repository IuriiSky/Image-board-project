import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InterfaceUser } from '../shared/interfaces/users.interfaces';
import { CookieService } from './cookie.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
                            // Authorization: 'token'
                          })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private loginUrl = 'http://localhost:3000/api/auth';
  private registerUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  onRegister(user: InterfaceUser) {
    const dataUser = {
      'user[email]': user.email,
      'user[name]': user.user,
      'user[password]': user.password,
    };
    return this.http.post<any>(this.registerUrl, this.objToEncodeUrl(dataUser), httpOptions);
  }

  private objToEncodeUrl(obj: any): string {

    const str = [];

    for (const property in obj) {
        if (Array.isArray(obj[property])) {
            str.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
        } else {
            str.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
        }
    }
    return str.join('&');
}

onSubmit(user: InterfaceUser) {
  const dataLoginUser = {
    email: user.email,
    password: user.password
  };
  return this.http.post<any>(this.loginUrl, this.objToEncodeLogUrl(dataLoginUser), httpOptions);

}

private objToEncodeLogUrl(obj: any): string {

  const str = [];

  for (const property in obj) {
      if (Array.isArray(obj[property])) {
          str.push(property + '=' + encodeURIComponent(obj[property]));
      } else {
          str.push(property + '=' + encodeURIComponent(obj[property]));
      }
  }
  return str.join('&');
}

getToken() {
  return this.cookieService.get('token');
}

checkUserLoggedIn() {
  return this.cookieService.get('token');
}

// checkAuthorization() {
//   return !!this.cookieService.get('token');
// }

}
