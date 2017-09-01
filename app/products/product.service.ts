import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './product.js';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

    private productUrl: string = "https://raw.githubusercontent.com/harishr2010/pluginModule/master/api/products/products.json";
    clickCount: Observable<number>;
    observer: Observer<number>;
    count: number = 0;
    constructor(private _http: Http) {
        let self = this;
        this.clickCount = new Observable((obs: Subscriber<any>) => self.observer = obs);
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    incrementCount(): void {
        this.observer.next(++this.count);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}