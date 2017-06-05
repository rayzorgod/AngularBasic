import { Component } from '@angular/core';
import template from "./product-detail.component.html";
import { IProduct2 } from './product2';

@Component({
    selector: 'product-detail',
    moduleId: module.id,
    template: template
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product: IProduct2;
}
