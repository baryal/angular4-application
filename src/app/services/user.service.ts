import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {User} from "../model/user";

@Injectable()
export class UserService {

  link = ['/user-list'];

  private userUrl: string = 'https://microservice-api.herokuapp.com';

  userEndpoint: string = "https://microservice-api.herokuapp.com/";
  LOGIN_PATH: string = "/login";//for login
  GET_ALL_USERS_PATH: string = "/users";//to load all users from database
  ADD_USER_PATH: string = "user/add";//to add a new user
  UPDATE_USER_PATH: string = "user/update";//to update a user
  GET_USER_PATH: string = "user/get/";//to get a user
  DELETE_USER_PATH: string = "user/delete/";//to delete a user

  loggedIn: boolean;
  loggedInUser: User;

  constructor(private router: Router, private http: Http) {
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  getLoginUrl(): string {
    return "/login";
  }

  login(email: string, password: string): Observable<User[]> {
    console.log(this.userEndpoint + this.LOGIN_PATH + "?email=" + email + "&password=" + password);

    return this.http.get(this.userEndpoint + this.LOGIN_PATH + "?email=" + email + "&password=" + password)
      .map(response => {
        this.loggedIn = true;
        this.router.navigate(this.link);
        this.loggedInUser = response.json();
        return response.json();
      })
      .catch(error => {
        return Observable.throw(error.json());
      });
  }

  getAllUsers(): Observable<User[]> {

    return this.http.get(this.userEndpoint + this.GET_ALL_USERS_PATH)
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error.json());
        return Observable.throw(error.json());
      });
  }

  saveUser(user: User): Observable<any> {

    //let headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log(user);
    console.log(JSON.stringify(user));

    return this.http.post(this.userEndpoint + this.ADD_USER_PATH, JSON.stringify(user), options)
      .map(response => {
        this.router.navigate(this.link);
        return response.json();
      })
      .catch(error => {
        console.log(error.json());
        return Observable.throw(error.json());
      });
  }

  updateUser(user: User): Observable<any> {

    //let headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log(user);
    console.log(JSON.stringify(user));

    return this.http.put(this.userEndpoint + this.ADD_USER_PATH, JSON.stringify(user), options)
      .map(response => {
        this.router.navigate(this.link);
        return response.json();
      })
      .catch(error => {
        console.log(error.json());
        return Observable.throw(error.json());
      });
  }

  getUser(id:number): Observable<User> {

    return this.http.get(this.userEndpoint + this.GET_USER_PATH + id)
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error.json());
        return Observable.throw(error.json());
      });
  }

  deleteUser(id:number): Observable<User[]> {

    return this.http.delete(this.userEndpoint + this.DELETE_USER_PATH + id )
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error.json());
        return Observable.throw(error.json());
      });
  }
}

