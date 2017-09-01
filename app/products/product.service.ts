import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './product.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

    private productUrl: string = "api/products/products.json";
    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);

        /*
                return [{
                    productId: '1',
                    productName: "Leaf Rake",
                    productCode: "GDN-0011",
                    releaseDate: "March 19, 2016",
                    description: "Leaf rake with 48-inch wooden handle.",
                    price: 19.95,
                    starRating: 3.2,
                    imageUrl: 'app/assets/images/Sonic_the_Hedgehog_from_S4E2_Clean_PNG_Format.png'
                },
                {
                    productId: '2',
                    productName: "Garden Cart",
                    productCode: "GDN-0023",
                    releaseDate: "March 18, 2016",
                    description: "15 gallon capacity rolling garden cart",
                    price: 32.99,
                    starRating: 4.2,
                    imageUrl: 'app/assets/images/Sonic_the_Hedgehog_from_S4E2_Clean_PNG_Format.png'
                }];
                */
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}