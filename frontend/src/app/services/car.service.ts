import { Injectable } from '@angular/core';
import {car}from'../models/car.model';
import {user}from'../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url='http://localhost:3000/api/car';
const url_user='http://localhost:3000/api/user';
const urlCars='http://localhost:3000/api/car/all/o';
const apiUrl = 'http://localhost:3000/api/car/all/o'; // Remplacez par l'URL correcte de votre API

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { 

  }

  
  getCars(): Observable<car[]> {
    return this.http.get<car[]>(apiUrl);
  }
 // getCars(): Observable<car[]> {
  //  let data = this.http.get<any>(urlCars);
   // return data ;
  //}





  getAll():Observable<car[]>{
    let data = this.http.get<any>(url);
    return data ;
  
}


getUser(_id:any): Observable<user> {
  return this.http.get<user>(`${url_user}/${_id}`)
 
} 
getCar(_id:any): Observable<car> {
  return this.http.get<car>(`${url}/${_id}`)
 
} 

delete(_id: String ):Observable<car[]>{
  return this.http.delete<any>(`${url}/${_id}`);
}
update(_id: any, data: any): Observable<any> {
  return this.http.put(`${url}/${_id}`, data);
}
/*getcar(_id:String): Observable<car> {
  return this.http.get<car>(`${url}/${_id}`)
 
}*/
add(data: any):Observable<car[]>{
  return  this.http.post<any>(url,data);

}
}