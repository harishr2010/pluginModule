import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ProductService } from './products/product.service.js';

import { AppComponent } from './app.component.js';

@NgModule({
  imports: [
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ProductService
  ]
})
export class AppModule { }
