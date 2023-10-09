import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss'],
})
export class ViewPropertyComponent implements OnInit {
  property: Property;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const propertyId = +this.route.snapshot.paramMap.get('id');
    this.propertyService.getPropertyById(propertyId).subscribe(
      (data) => {
        this.property = data;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch property details. Please try again.';
      }
    );
  }
}
