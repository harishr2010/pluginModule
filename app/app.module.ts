import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { ProductService } from './products/product.service.js';

import { AppComponent } from './app.component.js';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ProductService,
    Http
  ]
})
export class AppModule { }
