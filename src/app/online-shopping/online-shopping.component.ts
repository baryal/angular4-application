import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-online-shopping',
  templateUrl: './online-shopping.component.html',
  styleUrls: ['./online-shopping.component.css']
})
export class OnlineShoppingComponent implements OnInit {

  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/courses').subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  ngOnInit() {
  }

}
