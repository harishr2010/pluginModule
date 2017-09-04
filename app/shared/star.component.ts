import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../products/product.service.js';

@Component({
    selector: 'ai-star',
    providers: [
        {
            provide: ProductService,
            deps: [Http],
            useFactory: (_http: Http) => {
                return ProductService.getInstance(_http);
            }
        }
    ],
    template: `<h1>Hadging for start component</h1> <button (click)="onClick()">increment</button>`
})

export class StarComponent implements OnChanges {
    @Input()
    rating: number;

    @Output()
    ratingCliked: EventEmitter<string> = new EventEmitter();

    starWidth: number = 1;

    constructor(private productService: ProductService) {

    }

    ngOnChanges(): void {
        this.starWidth = 86 / 5 * this.rating;
    }

    onClick(): void {
        //   this.ratingCliked.emit(`The rating ${this.rating} was clicked`);
        this.productService.incrementCount();
    }
}