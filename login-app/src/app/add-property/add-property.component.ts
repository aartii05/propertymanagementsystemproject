import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import {PropertyService} from '../property.service';
import {Property} from '../property';




@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
   propertyForm: FormGroup;
   property: any;


    constructor(private snackBar: MatSnackBar,private PropertyService:PropertyService) {
        this.property = new Property();
      }

      ngOnInit(){}

      addProperty() {
          if (!this.property.address || !this.property.price || !this.property.numberOfBedrooms || !this.property.numberOfBathrooms || !this.property.areaSquareFeet || !this.property.name) {
                this.snackBar.open('All fields are required!', 'Close', {
                  duration: 3000
                });
              }
          else{
              this.PropertyService.addNewProperty(this.property).subscribe(data=>{
                        console.log(data);
                        alert(data);
                      },error=>{
                        alert("Error for loading properties")
                      });
          }
        }

}
