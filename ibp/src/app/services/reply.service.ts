import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reply, CreateReply} from '../shared/interfaces/reply.interfaces';

const jsonHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const formDataOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
}

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http:HttpClient) { }
  baseApi = 'http://localhost:3000/api/';

  createNewReply(reply: CreateReply, shortName: string, postIndex: string){
      let formData = new FormData();
          formData.append('reply[text]', reply.text);
          formData.append('reply[attachments_attributes][]', reply.file, reply.file.name);

          return this.http.post<any>(this.baseApi + 'replies/' + shortName + '/' + postIndex, formData);
  }
};