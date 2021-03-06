"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var ProductService = ProductService_1 = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.productUrl = "https://raw.githubusercontent.com/harishr2010/pluginModule/master/api/products/products.json";
        this.count = 0;
        var self = this;
        this.behaviorSubject = new BehaviorSubject_1.BehaviorSubject(0);
    }
    ProductService.getInstance = function (http) {
        if (!ProductService_1.singleInstance) {
            ProductService_1.singleInstance = new ProductService_1(http);
        }
        return ProductService_1.singleInstance;
    };
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.getCounter = function () {
        return this.behaviorSubject.asObservable();
    };
    ProductService.prototype.incrementCount = function () {
        this.behaviorSubject.next(++this.count);
    };
    ProductService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return ProductService;
}());
ProductService = ProductService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
var ProductService_1;
//# sourceMappingURL=product.service.js.map