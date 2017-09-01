"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var product_detail_component_js_1 = require("./product-detail.component.js");
var product_list_component_js_1 = require("./product-list.component.js");
var product_filter_pipe_js_1 = require("./product.filter.pipe.js");
var product_service_js_1 = require("./product.service.js");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule
        ],
        declarations: [
            product_detail_component_js_1.ProductDetailComponent,
            product_list_component_js_1.ProductListComponent,
            product_filter_pipe_js_1.ProductFilterPipe
        ],
        providers: [
            product_service_js_1.ProductService
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map