import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from "./model/user";

@Injectable()
export class UserService {
private userUrl:string ='https://microservice-api.herokuapp.com/';



  userEndpoint:string = "https://microservice-api.herokuapp.com/";
  LOGIN_PATH:string = "login";//for login
  GET_ALL_USERS_PATH:string = "users";//to load all users from database
  ADD_USER_PATH:string = "user/add";//to add new user

  constructor(private router: Router, private http:Http) { }

  
  login(email:string, password:string):Observable<User[]> {

    let link = ['/user-list'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    console.log(this.userEndpoint + this.LOGIN_PATH + "?email=" + email +"&password=" + password);
                         
    return this.http.get(this.userEndpoint + this.LOGIN_PATH + "?email=" + email +"&password=" + password, { headers: headers })
                    .map(response=> {
                      this.router.navigate(link);
                      return response.json();
                    })
                    .catch(error => {
                      console.log("Error: " + error.json()["message"])
                      return Observable.throw(error.json());
                  });
  }

}

