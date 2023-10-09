import { Component } from '@angular/core';
import {PropertyService} from '../property.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties[]:Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void{
    this.loadProperties();
  }
  loadProperties(){
    this.propertyService.getAllProperties().subscribe((data)=>{
      this.properties=data;
    });
  }

}
