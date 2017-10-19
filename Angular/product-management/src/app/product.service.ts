import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';

import { Router } from '@angular/router';

@Injectable()
export class ProductService {  
  products: Array<Product> = [];
  product: Product = null;

  constructor(private _http: Http, private _router: Router) { }

  getProducts(){
    return this.products;
  }

  getProductByIndex(prodIndex, cb){
    this.product = this.products[prodIndex];
    cb(this.product);    
  }

  createProduct(product, cb){
    this.products.push(product);
    let len = this.products.length;   
    cb("Created product successfully: ", this.products[0]);
    this._router.navigate(['products']);
  }

  editProduct(productIndex, product, cb){
    this.products[productIndex] = product;
    cb("Product updated successfully");
    this._router.navigate(['products']);
  }

  deleteProduct(productIndex){
    this.products.splice(productIndex, 1);
    this._router.navigate(['products']);
  }
}
