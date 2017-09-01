import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProductDetailComponent } from './product-detail.component.js';
import { ProductListComponent } from './product-list.component.js';
import { ProductFilterPipe } from './product.filter.pipe.js';

import { ProductService } from './product.service.js';

@NgModule({
    imports: [
        HttpModule
    ],
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}