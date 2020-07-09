import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { UserdetailsService } from './userdetails.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userToDos : any;
  userId : number;


  constructor(private _userdetailsservice : UserdetailsService, private router: Router) { }

  //-------Get data from json file--------------------------------------------------------------
  ngOnInit() {
    this.userId = Number(localStorage.getItem('useriddetail'));
    this._userdetailsservice.getUsersDetails(this.userId)
    .subscribe(data => {
      this.userToDos = data;
      console.log("Data : " , data);
    },
    error =>{
    });
  }

  usertable(){
    this.router.navigate(['/']);
  }

  //-------Add new ToDos--------------------------------------------------------------
  addnewTodos(){
   
    var title = (<HTMLInputElement>document.getElementById('InputTodo')).value;

    console.log("Call addnewToDo...........");
    let idLength = this.userToDos.length;
      let newData = {title : title , userId : this.userId ,id : idLength + 1, completed : false}
      this.userToDos.push(newData);
      console.log("Added User ToDos data successfully...........", newData);
  }

   //-------Check Status-----------------------------------------------------------------

   changeStatus(event , todo){
     var completed;
     if(event.target.checked) {
       for(let i=0; i < this.userToDos.length ; i++){
         if(this.userToDos[i].id == todo.id){
           this.userToDos[i].completed = true;
           completed = true;
         }
       }
     }
     else{
      for(let i=0; i < this.userToDos.length ; i++){
        if(this.userToDos[i].id == todo.id){
          this.userToDos[i].completed = false;
          completed = false;
        }
      }
    }

   //-------Update new ToDos-----------------------------------------------------------------

  this._userdetailsservice.updateNewTodos(todo.id, completed)
      console.log(' Updated ToDo successfully');
  }
  
  //-------Delete user ToDos------------------------------------------------------------------

  deleteUserToDos(todo){
   console.log("Call deleteUserToDos.............");
   for(let i=0; i < this.userToDos.length ; i++){
      if(this.userToDos[i].id ===todo.id){
          this.userToDos.splice(i,1);
      }     
    }
    console.log('Deleted User ToDos data successfully..............');
  }

}



