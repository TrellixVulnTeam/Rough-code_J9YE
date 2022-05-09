import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  signIn(login:Login):Observable<string> {
    return this.http.post("http://localhost:8080/login/signIn",login,{responseType:'text'});
  }
}
