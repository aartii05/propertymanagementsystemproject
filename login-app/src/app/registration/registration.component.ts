import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
username:string='';
password:string='';
registrationSuccess: boolean = false;
errorMessage: string = '';

 constructor(private http: HttpClient) {}

registerUser(){
const user = {
      username: this.username,
      password: this.password
};
 const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>('http://localhost:8080/auth/register', user, { headers }).subscribe(
      response => {
        console.log('User registered successfully:', response);
        this.registrationSuccess = true;
        this.errorMessage = ''; // Reset any previous error message
      },
      error => {
        console.error('Error registering user:', error);
        this.errorMessage = 'Registration failed. Please try again.';
        this.registrationSuccess = false;
      }
    );
  }


}
