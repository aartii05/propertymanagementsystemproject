import { Component,OnInit } from '@angular/core';
import {PropertyService} from '../property.service';
import {Property} from '../property';
@Component({
  selector: 'app-show-all-properties',
  templateUrl: './show-all-properties.component.html',
  styleUrls: ['./show-all-properties.component.css']
})
export class ShowAllPropertiesComponent implements OnInit {
propertyData:Property[]=[];
property:Property=new Property();
bedrooms: number = 2;
bathrooms: number = 2;

  displayedColumns: string[] = ['Id', 'Name','Address', 'Price', 'NumberOfBedrooms', 'NumberOfBathrooms', 'AreaSquareFeet', 'Delete'];
  clickedRows = new Set<Property>();

   constructor(private PropertyService:PropertyService)
    {
      this.showProperties();
    }
    ngOnInit(){
    }

     showProperties(){
         this.PropertyService.getAllPropertyList().subscribe(data=>{
              this.propertyData=data;
            },error=>{
              console.log(error);
              alert("Error for loading properties")
            });
      }

     showPropertiesWithFilters(){
              this.PropertyService.getFilteredPropertyList(this.bedrooms,this.bathrooms).subscribe(data=>{
                   this.propertyData=data;
                 },error=>{
                   console.log(error);
                   alert("Error for loading properties")
                 });
           }

         deleteProperty(property:any){
            const confirmationMessage = `Are you sure you want to delete the property with this name "${property.name}"?`;
            const isConfirmed = confirm(confirmationMessage);
            if(isConfirmed){
              this.PropertyService.deleteProperty(property.id).subscribe(data=>{
                              alert(`The property record with this name "${property.name}" deleted successfully👍!`);
                              this.showProperties();
                            },error=>{
                              alert("Error for loading properties")
                            });
            }
            else{
              alert(`The property with this name "${property.name}" not deleted!`)
            }

         }


}
