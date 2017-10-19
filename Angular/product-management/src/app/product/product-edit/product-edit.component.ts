import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product = new Product();  
  productIndex;

  constructor(private _productService: ProductService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      console.log("Edit product index: ", params.get('prodIndex'));
      this.productIndex = params.get('prodIndex');
    });
  }

  ngOnInit() {
    this._productService.getProductByIndex(this.productIndex, (dataFromApi) => {
      this.product = dataFromApi;
      console.log("odl prodeu: ", this.product);
      console.log("data from api edit comp ts: ", dataFromApi);
    });
  }

  onUpdate(){
    this._productService.editProduct(this.productIndex, this.product, (dataFromApi) =>{
      console.log(dataFromApi);
    })
  }

  deleteProduct(){
    this._productService.deleteProduct(this.productIndex);
  }
}
