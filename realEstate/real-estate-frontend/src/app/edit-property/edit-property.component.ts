import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss'],
})
export class EditPropertyComponent implements OnInit {
  propertyForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    const propertyId = +this.route.snapshot.paramMap.get('id');
    this.propertyService.getPropertyById(propertyId).subscribe((property) => {
      this.propertyForm.patchValue(property); // Pre-fill the form with property data
    });
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
      const propertyId = +this.route.snapshot.paramMap.get('id');
      this.propertyService
        .updateProperty(propertyId, this.propertyForm.value)
        .subscribe(
          (data) => {
            // Property updated successfully, redirect or show a success message.
          },
          (error) => {
            this.errorMessage = 'Failed to update property. Please try again.';
          }
        );
    } else {
    console.log("Invalid");
    }
  }
}
