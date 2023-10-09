import { NgModule } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';


import {LoginUserService} from './loginuser.service';
import {HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ShowAllPropertiesComponent } from './show-all-properties/show-all-properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavbarComponent,
    HomeComponent,
    ShowAllPropertiesComponent,
    AddPropertyComponent,
    RegistrationComponent,
    UpdatePropertyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  providers: [LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
