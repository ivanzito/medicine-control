import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable , map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http: HttpClient

  url:string = "http://localhost:3000/login" 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  // doLogin(login:Login): Observable<Login> {
  //   return this.http.post<Login>(this.url, login)
  // }
  
  doLogin(login:Login): Observable<Boolean> {
    return this.http.get<Login[]>(this.url, this.httpOptions)
      .pipe(map(item => item[0]))
      .pipe(map(item => item != null && item.user == login.user && item.pwd == login.pwd))
  }

  constructor(http: HttpClient) { 
    this.http = http;
  }
}
