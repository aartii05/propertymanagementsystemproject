import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

   isLoggedIn=false;
   constructor(private http:HttpClient) { }
    private _url: string = "http://localhost:8080/auth/login";

    loginUser(user:User): Observable<User>{
      console.log(user);
      return this.http.post<User>(this._url,user);

   }
}
