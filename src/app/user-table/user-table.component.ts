import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  public userData : any = [];

  constructor(private _userService: UserService , private router : Router){}

  ngOnInit() {
    this._userService.getUsers().subscribe(data => { 
      console.log("Data : " , data);
      this.userData = data;
     // this.userData = JSON.stringify(data);
      // console.log('parse data : ', this.userData);
    },
    error => {
    });
  }

  showUsersData(user : any) {
    localStorage.setItem('useriddetail' , user.id);
    this.router.navigate(['/usertodos']);
  }
}
