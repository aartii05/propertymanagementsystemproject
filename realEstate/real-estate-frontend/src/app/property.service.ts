import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrl = 'http://localhost:4200/api/properties';


  constructor(private http:HttpClient) { }

  getAllProperties(); Observable<Property[]>{
  return this.http.get<Property[]>(this.baseUrl);
  }

  getPropertyById(id:number); Observable<Property[]>{
    return this.http.get<Property[]>(`${this.baseUrl}/${id}`);
  }

  addProperty(property:Property); Observable<Property[]>{
  return this.http.post<Property>(this.baseUrl,property);
  }

  updateProperty(id:number,property:Property); Observable<Property[]>{
    return this.http.put<Property>(`${this.baseUrl}/${id}`,property);
  }
}
