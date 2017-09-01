import { Component } from '@angular/core';
import { IProduct } from './products/product.js';
import { ProductService } from './products/product.service.js';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'pm-app',
    providers: [ProductService],
    templateUrl: 'https://raw.githubusercontent.com/harishr2010/pluginModule/master/app/products/product-list.component.html',
    styleUrls: ['https://raw.githubusercontent.com/harishr2010/pluginModule/master/app/products/product-list.component.css']
})

export class AppComponent {
    pageTitle: string = 'product List';
    imageWidth: number = 20;
    imageMargin: number = 20;
    showImage: boolean;
    listFilter: string;
    products: IProduct[];
    clickCount: number;
    private observableNum: Observable<number>;

    constructor(private productService: ProductService) {
        // this.clickCount = productService.clickCount;
    }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(data => this.products = data);
        this.observableNum = this.productService.getCounter();
        this.observableNum.subscribe(value => {
            this.clickCount = value;
        });
    }

    toggleImage = (): void => {
        this.showImage = !this.showImage;
    }

    onRatingClicked = (event: string): void => {
        this.pageTitle = event;
    }
}