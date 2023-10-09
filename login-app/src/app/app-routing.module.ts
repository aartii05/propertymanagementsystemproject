import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {HomeComponent} from './home/home.component';
import {AddPropertyComponent} from './add-property/add-property.component';
import {ShowAllPropertiesComponent} from './show-all-properties/show-all-properties.component';
import {RegistrationComponent} from './registration/registration.component';
import {UpdatePropertyComponent} from './update-property/update-property.component';
const routes: Routes = [
{path:"", redirectTo:"login",pathMatch:"full"},
{path:"login", component: UserLoginComponent},
{path:'register',component:RegistrationComponent},
{
  path:'home',
  component:HomeComponent,
  children:[
    {path:'getProperties',component:ShowAllPropertiesComponent},
    {path:'addProperties',component:AddPropertyComponent},
    {path:'updateProperties',component:UpdatePropertyComponent},
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
