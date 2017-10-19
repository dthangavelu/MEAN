import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();

  constructor(private _productService: ProductService) { }

  ngOnInit() {    
  }
  
  onCreate(){
    console.log("prdu new comp crate: ", this.product)
    this._productService.createProduct(this.product, (dataFromApi) => {        
      console.log(dataFromApi);     
    });
    
    this.product = new Product();
  }
}
