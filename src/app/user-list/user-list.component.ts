import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @ViewChild('userDetailModel') userDetailModel;
  @ViewChild('deleteModal') deleteModal;

  users: Array<User> = [];
  errorMsg: string = null;

  selectedUser: User;

  constructor(private userService: UserService) {
  }

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

  openModel(user: User = null) {
    this.selectedUser = user;
    this.userDetailModel.nativeElement.className = 'modal fade show';
  }

  closeModel() {
    this.userDetailModel.nativeElement.className = 'modal hide';
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser.id).subscribe(
      data => {
        this.users = data
      }
      ,
      error => {
        this.errorMsg = error.hasOwnProperty("message") ? <any>error["message"] : "Server Error. Something went wrong, Please try agian later.";
        alert(this.errorMsg);
      }
    );
  }
}
