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
var product_service_js_1 = require("./products/product.service.js");
var AppComponent = (function () {
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
    function AppComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.pageTitle = 'product List';
        this.imageWidth = 20;
        this.imageMargin = 20;
        this.toggleImage = function () {
            _this.showImage = !_this.showImage;
        };
        this.onRatingClicked = function (event) {
            _this.pageTitle = event;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_js_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map