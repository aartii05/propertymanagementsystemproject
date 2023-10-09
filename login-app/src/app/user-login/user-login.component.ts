import { Component,OnInit } from '@angular/core';
import {User} from '../user';
import {LoginUserService} from '../loginuser.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 user:User = new User();
   username="";
   password="";
   userData: any[]= [];

   constructor(private _userService :LoginUserService,private router: Router){
   }

   ngOnInit(){
//      this._userService.getData().subscribe(data =>{this.userData=data;})
  }

  redirectToRegistration() {
      this.router.navigate(['/register']);
    }

  userLogin(){
    this.user.username = this.username;
    this.user.password = this.password;
    this._userService.loginUser(this.user).subscribe(data =>{alert("Login Successful")},error=>{alert("Error for login")});
  }
}




