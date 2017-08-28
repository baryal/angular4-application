import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Array<User> = [];
  errorMsg:string = null;
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getAllUsers()
    .subscribe(
       data => {
         this.users = data
       }
       ,
       error => {
         this.errorMsg = <any>error["message"];
       }
     );
  }
}
