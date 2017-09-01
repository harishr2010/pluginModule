import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.js';
import { ProductService } from './product.service.js';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle: string = 'product List';
    imageWidth: number = 20;
    imageMargin: number = 20;
    showImage: boolean;
    listFilter: string;
    products: IProduct[];
    // products: IProduct[] = [{
    //     productId: '1',
    //     productName: "Leaf Rake",
    //     productCode: "GDN-0011",
    //     releaseDate: "March 19, 2016",
    //     description: "Leaf rake with 48-inch wooden handle.",
    //     price: 19.95,
    //     starRating: 3.2,
    //     imageUrl: 'app/assets/images/Sonic_the_Hedgehog_from_S4E2_Clean_PNG_Format.png'
    // },
    // {
    //     productId: '2',
    //     productName: "Garden Cart",
    //     productCode: "GDN-0023",
    //     releaseDate: "March 18, 2016",
    //     description: "15 gallon capacity rolling garden cart",
    //     price: 32.99,
    //     starRating: 4.2,
    //     imageUrl: 'app/assets/images/Sonic_the_Hedgehog_from_S4E2_Clean_PNG_Format.png'
    // }];

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(data => this.products = data);
    }

    toggleImage = (): void => {
        this.showImage = !this.showImage;
    }

    onRatingClicked = (event: string): void => {
        this.pageTitle = event;
    }

}