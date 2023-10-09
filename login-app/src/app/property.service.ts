import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Property} from './property';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  private _url: string = "http://localhost:8080/property/find";

  getAllPropertyList(): Observable<Property[]>{
      return this.http.get<Property[]>(this._url);
  }

  getFilteredPropertyList(bedrooms: number, bathrooms: number): Observable<Property[]>{
        return this.http.get<Property[]>(`http://localhost:8080/property/filter?bedrooms=${bedrooms}&bathrooms=${bathrooms}`);
    }

  addNewProperty(property:any): Observable<any>{
        return this.http.post("http://localhost:8080/property/add", property,{responseType: 'text'});
  }

  updateProperty(id: number, updatedPropertyData: any): Observable<any> {
        const updateUrl = "http://localhost:8080/property/update";
        return this.http.put(updateUrl, updatedPropertyData);
  }

  deleteProperty(id: number): Observable<any> {
          const updateUrl = `http://localhost:8080/property/delete/${id}`;
          return this.http.delete(updateUrl);
    }
}

