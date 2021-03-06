import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductService } from './products/product.service.js';

import { AppComponent } from './app.component.js';
import { StarComponent } from './shared/star.component.js';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    StarComponent
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    AppComponent,
    StarComponent
  ]
})
export class AppModule { }
