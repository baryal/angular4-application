import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @ViewChild('userDetailModel') userDetailModel;

  users:Array<User> = [];
  errorMsg:string = null;

  selectedUser:User;

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getAllUsers()
    .subscribe(
       data => {
         this.users = data
       }
       ,
       error => {
         this.errorMsg = error.hasOwnProperty("message") ? <any>error["message"] : "Server Error. Please check your connection and try agian.";
       }
     );
  }

  openModel(user:User = null) {
    this.selectedUser = user;
    this.userDetailModel.nativeElement.className = 'modal fade show';
  }

  closeModel() {
    this.userDetailModel.nativeElement.className = 'modal hide';
 }
}
