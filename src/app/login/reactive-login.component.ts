import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'reactive-login',
  template: `
    <div class="container">
      <form class="form-horizontal" novalidate [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email address"
            formControlName="email">
            
        </div>
        <!-- email validation message -->
        <div
          class="error"
          *ngIf="loginForm.get('email').hasError('required') && loginForm.get('email').touched">
          Email is required
        </div>
        <div
          class="error"
          *ngIf="loginForm.get('email').hasError('minlength') && loginForm.get('email').touched">
          Minimum of 2 characters
        </div>
        <div class="form-group">
          <label for="email">
            <span>Password:</span></label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            formControlName="password">

        </div>
        <!-- password validation message -->
        <div
          class="error"
          *ngIf="loginForm.get('password').hasError('required') && loginForm.get('password').touched">
          Password is required
        </div>
        <div
          class="form-group"
          *ngIf="errorMsg">
          {{ errorMsg }}
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Sign In</button>
        </div>
      </form>
    </div>
  `
})
/**
 * This is example of reactive form.
 */
export class ReactiveLoginComponent implements OnInit {

  //user = { email:"email", password:"password" };
  errorMsg: string = null;

  loginForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    //
    /* this.loginForm = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.minLength(2)]),
     password: new FormControl('', Validators.required)
     });*/

    //Form builder
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value
    console.log("email: " + email + " and password: " + password);
    this.userService.login(email, password)
      .subscribe(
        response => {
          // doing logic with responce
        }
        ,
        error => {
          this.errorMsg = <any>error["message"];
        }
      );
  }

}
