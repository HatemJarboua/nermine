import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { reservation } from '../models/reservation.model';

const apiUrl = 'http://localhost:3000/api/reservation/reserve';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  createReservation(data: any):Observable<reservation[]>{
    return  this.http.post<any>(apiUrl ,data);
  
  
  }
  getAll():Observable<reservation[]>{
    let data = this.http.get<any>(apiUrl );
    return data ;
  
}

}