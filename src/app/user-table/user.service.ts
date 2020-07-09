import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL ='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) {}

  //-------Get user from userURL----------------------------
   getUsers(): Observable<object> {
    let header = new HttpHeaders({
      'Content-type' : 'application/json'
    });

    const options = ({
      body : 'body',
      headers : new HttpHeaders().append('key' , 'value'),
      params : new  HttpParams().append('key' , 'value'),
    });

    return this.http.get(this.userURL , options);
                           
  }
 
}
