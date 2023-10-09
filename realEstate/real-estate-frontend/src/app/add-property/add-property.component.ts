import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  propertyForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.propertyForm = this.formBuilder.group({
      address: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      bedrooms: ['', [Validators.required, Validators.min(0)]],
      bathrooms: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      this.propertyService.addProperty(this.propertyForm.value).subscribe(
        (data) => {

          this.propertyForm.reset();
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Failed to add property. Please try again.';
        }
      );
    } else {

      this.errorMessage = 'Please correct the form errors.';
    }
  }
}
