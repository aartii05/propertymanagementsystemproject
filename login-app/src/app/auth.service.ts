import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=false;
  constructor(private http:HttpClient) { }
  private _url: string = "http://localhost:8080/auth/login";

    private user: any = this.loadUserFromLocalStorage();

    private loadUserFromLocalStorage(): any {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    }

    setUser(user: any): void {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    }

    getUserRole(): string {
      return this.user ? this.user.role : '';
    }

    hasRequiredRole(expectedRoles: string[]): boolean {
      const userRole = this.getUserRole();
      return expectedRoles.includes(userRole);
    }

    isAuthenticated(): boolean {
      return this.user !== null;
    }

  loginUser(user:User): Observable<User>{
    console.log(user);
     return this.http.post<User>(this._url,user);
  }

  registerUser(user:any): Observable<any>{
      console.log(user);
       return this.http.post<User>("http://localhost:8080/auth/register",user);
  }


  storeToken(username: string): void {
    localStorage.setItem('username', username);
  }

  getToken(): string | null {
    return localStorage.getItem('username');
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('user');
  }
}
