import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';
import { InterfaceUser } from '../shared/interfaces/users.interfaces';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const httpOptionsChangeUser = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
};

@Injectable()

export class CabinetService {
  usersUrl = 'http://localhost:3000/api/users/me';
  private inviteUrl = 'http://localhost:3000/api/invites';
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) { }

  getUser() {
    return this.http.get<any>(this.usersUrl, httpOptions);
  }

  deleteUser(user: InterfaceUser) {
    this.cookieService.delete_cookie('token');
    this.router.navigate(['/']);
    window.localStorage.clear();
    return this.http.delete(this.usersUrl, httpOptions);
  }

  logoutUser() {
    this.cookieService.delete_cookie('token');
    this.router.navigate(['/']);
    window.localStorage.clear();
  }

  // checkUserLoggedIn() {
  //   return this.cookieService.get('token');
  // }

  submitInvite(invite) {
    return this.http.post<any>(this.inviteUrl, this.objToEncodeInviteUrl(invite), httpOptions);
  }

    private objToEncodeInviteUrl(obj: any): string {

      const str = [];

      console.log(str);
      for (const property in obj) {
          if (Array.isArray(obj[property])) {
              str.push('invite[' + encodeURIComponent(property) + ']' + '=' + encodeURIComponent(obj[property]));
          } else {
              str.push('invite[' + encodeURIComponent(property) + ']' + '=' + encodeURIComponent(obj[property]));
          }
      }
      return str.join('&');
  }

}
