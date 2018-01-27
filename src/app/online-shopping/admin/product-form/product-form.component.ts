import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/take';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: Product = new Product();

  id;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    }
    else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  getCategories() {

  }

}
