import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';
import { InterfaceUser } from '../shared/interfaces/users.interfaces';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

const httpOptionsChangeUser = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
                             Accept: 'application/json' })
};

@Injectable()

export class CabinetService {
  usersUrl = 'http://localhost:3000/api/users/me';
  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getUser() {
    return this.http.get<any>(this.usersUrl, httpOptions);
  }

deleteUser(user: InterfaceUser) {
  return this.http.delete(this.usersUrl, httpOptions);
}
}
