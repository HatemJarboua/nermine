import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import { user } from '../models/user.model';
import { retry, catchError } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3000/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   

  register(data: any):Observable<user[]>{
  return  this.http.post<any>(AUTH_API+ 'register',data).pipe(
  // retry(1),
   //catchError(this.handleError)
  )

}
login(data:any): Observable<any> {
  return this.http.post(AUTH_API + 'login', data);
}
getToken(){
  return localStorage.getItem('token');
}
 
/*handleError(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}*/

}

