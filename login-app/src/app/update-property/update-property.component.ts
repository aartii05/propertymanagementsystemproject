
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css'],
})
export class UpdatePropertyComponent {
  propertyName: string = '';
  price: number | null = null;
  updateSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  updateProperty() {
    const updatedProperty = {
      name: this.propertyName,
      price: this.price,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


    this.http.post('http://localhost:8080/property/update', updatedProperty, { headers }).subscribe(
      (response) => {
        console.log('Property updated successfully:', response);
        this.updateSuccess = true;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error updating property:', error);
        this.errorMessage = 'Property update failed. Please try again.';
        this.updateSuccess = false;
      }
    );
  }
}

