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
  }

}
/**
 * Next steps
 * Create model class for the User and Address:
 * for User the fields would be : id, firstName, lastName, dateOfBirth, gender, consent, email and password
 *      "id": 30,
        "firstName": "Test First Name 30",
        "lastName": "Test Last Name 30",
        "dateOfBirth": "30/08/2017",
        "gender": "Male 30",
        "consent": "I agree30",
        "email": "test30@gmail.com",
        "password": "password30",
 * 
 * 
 * For Address the fields would be: id, addressType, street, city, state and zipCode.
 * 
 *          "id": 30,
            "addressType": "Home30",
            "street": "4551 Kipling St., Apt# 30",
            "city": "Wheat Ridge30",
            "state": "Colorado30",
            "zipCode": "80033-30"
 * 
 * Steps to make server call from user.service.ts
 * 1. Create a method in user.service.ts, which takes 2 parameters(email and password)
 * 2. call the http get service from the method created in step 1. create url from userEndpoint, LOGIN_PATH, email and password using concatination of string.(should be like http://localhost:8080/login?email=test30@gmail.com&password=password31)
 * 3. Transform the response using .map() method of http.
 * 4. Transform the error using .catch() method of http.
 * 5. If the service call is successful, navigate the page to user-list using routeing functionality.
 * 6. If the service call is unsuccessful, display error mesasage in the log in page.
 * 7. call the service method from onSubmit() method of this component.
 */