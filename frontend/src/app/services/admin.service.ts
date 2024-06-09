import { Injectable } from '@angular/core';
import {car}from'../models/car.model';
import {user}from'../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url_user='http://localhost:3000/api/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAll():Observable<user[]>{
    let data = this.http.get<any>(url_user);
    return data ;
  
}
delete(_id: String ):Observable<car[]>{
  return this.http.delete<any>(`${url_user}/${_id}`);
}

update(_id: any, data: any):Observable<user> {
  return this.http.put(`${ url_user}/${_id}`, data);
 
}
getUser(_id:any): Observable<user> {
  return this.http.get<user>(`${url_user}/${_id}`)
 
} 
}
