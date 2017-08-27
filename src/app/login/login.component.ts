import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { email:"email", password:"password" };
  constructor(private userService:UserService) { }

  ngOnInit() {
    
  }


  onSubmit() {
    console.log("email: " + this.user.email + " and password: " + this.user.password);
    this.userService.login(this.user.email, this.user.password)
                     .subscribe(
                        response => {
                          // doing logic with responce
                        }
                        ,
                        error => {
                          alert("Incorrect email or password. please try again later!!");
                        }
                      );
  }

}
