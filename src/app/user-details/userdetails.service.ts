import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  
private userToDoURL = 'https://jsonplaceholder.typicode.com/todos?userId=';
private addToDoURL = 'https://jsonplaceholder.typicode.com/todos';
private deleteToDoURL = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http:HttpClient) {}
   
  //-------Get user from userToDoURL----------------------------------

    getUsersDetails(userId : number): Observable<object> {
      let header = new HttpHeaders({
        'Content-type' : 'application/json'
      });

      const options = ({
        body : 'body',
        headers : new HttpHeaders().append('key' , 'value'),
        params : new  HttpParams().append('key' , 'value'),
      });
  
      return this.http.get(this.userToDoURL + userId, options);
    }

    //-------Add new ToDos from userURL--------------------------------------------------------------------------

    addNewTodos(id, userId , title) : Observable<object> {
      console.log(" Add service process is called.......");

      let body = JSON.stringify({title : title ,id : id , userId : userId , completed : false});
      let header = new HttpHeaders({
        'Content-type' : 'application/json'
      });

      const options = ({
        body : 'body',
        headers : new HttpHeaders().append('key' , 'value'),
        params : new  HttpParams().append('key' , 'value'),
      });

      console.log("URL : " + this.addToDoURL);
      console.log("Body : " + body);
      console.log("Options : " + options);

      return this.http.post(this.addToDoURL , options);

   }

    //-------Update new ToDos from addToDoURL-------------------------------------------------------------------------

    updateNewTodos(todoId , completed) : Observable<object> {
      console.log(" Update service process is called.......");
  
      let body = JSON.stringify({ completed : completed });
      let header = new HttpHeaders({
        'Content-type' : 'application/json'
      });
  
      let options = ({
        body : 'body',
        headers : new HttpHeaders().append('key' , 'value'),
        params : new  HttpParams().append('key' , 'value'),
      });
  
      console.log("URL : " + this.addToDoURL);
      console.log("Body : " + body);
      console.log("Options : " + options);
  
      return this.http.put(this.addToDoURL + '/' + todoId, options);
  
    }

      //-------Delete user ToDos from deleteToDoURL-------------------------------------------------------------------------

      // deleteTodos(todoId) : Observable<object> {
      //   console.log(" Update service process is called.......");
    
      //  // let body = JSON.stringify({});
      //   let header = new HttpHeaders({
      //     'Content-type' : 'application/json'
      //   });
    
      //   let options = ({
      //     body : 'body',
      //     headers : new HttpHeaders().append('key' , 'value'),
      //     params : new  HttpParams().append('key' , 'value'),
      //   });
    
      //   console.log("URL : " + this.deleteToDoURL);
      // //  console.log("Body : " + body);
      //   console.log("Options : " + options);
    
      //   return this.http.delete(this.deleteToDoURL + '/' + todoId, options);
    
      // }
}
