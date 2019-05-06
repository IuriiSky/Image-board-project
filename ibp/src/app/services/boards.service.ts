import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Board, CreateBoard } from '../shared/interfaces/board.interfaces';
import { Observable } from 'rxjs';

const jsonHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const urlEnhttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable()
export class BoardsService {
  constructor(private http: HttpClient) { }
  baseApi = 'http://localhost:3000/api/';

  getAllBoards() {
    return this.http.get<Board[]>(this.baseApi+'boards');
};

  createBoard(board: CreateBoard) {
    let body = {
      "board[short_name]" : board.short_name,
      "board[name]" : board.name,
      "board[description]": board.description,
    };

    return this.http.post<any>(this.baseApi + 'admin/boards', this.objToEncodeUrl(body), urlEnhttpOptions);
  };

  private objToEncodeUrl(obj: any): string {

    var str = [];

    for (var property in obj) {
        if (Array.isArray(obj[property])) {
            str.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        }
        else {
            str.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        }
    }
    return str.join("&");
}
}
