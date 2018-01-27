import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-online-shopping-header',
  templateUrl: './online-shopping-header.component.html',
  styleUrls: ['./online-shopping-header.component.css']
})
export class OnlineShoppingHeaderComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
