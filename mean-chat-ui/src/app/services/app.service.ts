import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, Response } from '@angular/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

import { Message } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  newMessage(req): Observable<any>{
    const apiUrl = 'http://localhost:3000/chat';
    const body = ({
      message: req,
      username: 'Anonymous'
    });
    return this.http.post(apiUrl, body);
  }
}
