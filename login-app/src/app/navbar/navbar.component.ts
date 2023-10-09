// import { Component  } from '@angular/core';
// import {LoginUserService} from '../loginuser.service';
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
// loginFormVisible = false;
// isLoggedIn = false;
//
// constructor(private loginUserService:LoginUserService){
// }
// ngOnInit(){
//  this.isLoggedIn = this.loginUserService.isLoggedIn;
// }
//
// toggleLoginForm(){
// console.log("fsdfs");
// this.loginFormVisible = !this.loginFormVisible;
//
//
//
//
// }
// }

// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
isLoggedIn = false;
  constructor(private router: Router, private authService: AuthService) {}

  logout() {

    this.authService.logout()
          this.router.navigate(['/login']);
  }
}

