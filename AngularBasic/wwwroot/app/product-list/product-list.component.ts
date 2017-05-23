import { Component } from '@angular/core';
import template from './product-list.template.html';

interface Product {
    product: string;
    code: string;
    available: boolean;
    price: number;
    rating: boolean;
}

class MyProduct implements Product {
    constructor(
        public product: string,
        public code: string,
        public available: boolean,
        public price: number,
        public rating: boolean
    ) {}
}

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    template: template
})
export class ProductListComponent {
    pageTitle: string = 'Product Listss';
    imageWidth: number = 50;
    imageMargin: number = 2;
    shownImage: boolean = false;
    listFilter: string = 'cart';
    productss: any[] = [
        {
            "productId": 2,
            "productName": "Golden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon ",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/267334/Shopping-Cart-Icon-3.png"
        },
        {
            "productId": 5,
            "productName": "Gold",
            "productCode": "GDN-0024",
            "releaseDate": "Feb 18, 2016",
            "description": "Hammer ",
            "price": 11.99,
            "starRating": 1.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/193438/freehammer.png"
        }
    ]; //In typescript use any when don't know or don't care what the datatype is.

    products: Product[] = [
        {
            product: "Test product",
            code: "ABC",
            available: true,
            price: 500,
            rating: true
        },
        {
            product: "Test product 2",
            code: "ABCDEF",
            available: false,
            price: 234,
            rating: false
        },
        new MyProduct("test product 3", "ASDG", true, 5.32, false)
    ];

    public showImage(product: Product) {
        console.log(product);
    }

    public toggleImage(): void {
        this.shownImage = !this.shownImage;
    }


}