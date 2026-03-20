import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private baseApi=`http://localhost:8080/api/v1/`;

  constructor(private http:HttpClient) {}

  sendMessage(message:string,conversationId:string):Observable<string>
  {
    const headers=new HttpHeaders({
      'ConversationId': conversationId
    })
    return this.http.post<string>(`${this.baseApi}chat`,message,{headers, responseType:'text' as 'json'});
  }
}
