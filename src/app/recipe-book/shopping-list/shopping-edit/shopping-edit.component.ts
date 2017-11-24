import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('quantityInput') quantityInputRef:ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.quantityInputRef.nativeElement.value;
    if (ingName !== '' && ingQuantity !== 0) {
      const newIngredient = new Ingredient(ingName, ingQuantity);
      this.ingredientAdded.emit(newIngredient);
      this.clearIngredient();
    }
  }

  clearIngredient() {
    this.nameInputRef.nativeElement.value = '';
    this.quantityInputRef.nativeElement.value = '';
  }

}
