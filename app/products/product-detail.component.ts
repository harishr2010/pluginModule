import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'productdetail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product: IProduct;
    title: string = "Product Details";

    constructor(private _route: ActivatedRoute,
        private _router: Router) {

    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.title = `${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products'])
    }
}