import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import {ViewPropertyComponent} from './view-property/view-property.component';
import {AddPropertyComponent} from './add-property/add-property.component';
import {EditPropertyComponent} from './edit-property/edit-property.component';



const routes: Routes = [
  {path: 'properties',component:PropertyListComponent},
  {path: 'add-property',component:AddPropertyComponent},
  {path: 'view-property',component:ViewPropertyComponent},
  {path: 'edit-property', component:EditPropertyComponent},
  {path: '',redirectTo:'/properties',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
