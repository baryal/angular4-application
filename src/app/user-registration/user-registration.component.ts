import {Component, Input, OnInit} from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../model/user";
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
};

  @Input() user:User= new User ();
  genders = [{value:"male", label:"Male"}, {value:"female", label:"Female"}, {value:"other", label:"Other"}];

  states = [{code:"CO", label:"Colorado"}, {code:"KS", label:"Kansas"}, {code:"MA", label:"Massachusetts"}, {code:"TX", label:"Texas"}];

  errorMsg:string = null;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.user.dateOfBirth = this.user.dob["formatted"];
    this.userService.saveUser(this.user)
                    .subscribe(
                      response => {
                        alert ("Successfully Saved!!");
                      }
                      ,
                      error => {
                        alert ("Problem in saving!!");
                        //this.errorMsg = <any>error["message"];
                      }
                    );
    //alert ("it works!!");
  }

}
