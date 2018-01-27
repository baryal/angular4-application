import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAll().switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    }).subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : this.products;
      });

  }

  getDevice() {

    let iDevices = [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ];

    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          return "You are in Mobile or Tablet";
        }
      }
    }

    return "You are in Mac or PC";
  }

  isMobileOrTablet() {
    let deviceRegEx = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile", "i");
    if (deviceRegEx.test(navigator.userAgent)) {
      return "You are in Mobile or Tablet";
    }

    return "You are in Mac or PC";
  }

}
