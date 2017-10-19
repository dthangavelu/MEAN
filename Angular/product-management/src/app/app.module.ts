import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
