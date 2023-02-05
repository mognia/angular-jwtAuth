import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs";

interface User {
  email:string,
  pass:string
}
const url = 'https://reqres.in'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  public authenticate (form:User) {
    let userObj = {
      email : form.email,
      password: form.pass
    }
    //  this is just the HTTP call,
    return this.http.post<User>(`${url}/api/login`, userObj);

  }
  public isAuthenticated(): any {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
  }
}
