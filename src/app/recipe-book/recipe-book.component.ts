import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  loadFeature = 'recipe';
  constructor() { }

  ngOnInit() {
  }

  onNavigate(feature:string) {
    this.loadFeature = feature;
  }

}
