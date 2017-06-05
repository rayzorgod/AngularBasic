import { Component, OnInit } from '@angular/core';
import template from './product-list.component.html';
import { IProduct } from './Product'
import { IProduct2 } from './Product2'
import { ProductService } from './product-service'


class MyProduct implements IProduct {
    constructor(
        public product: string,
        public code: string,
        public available: boolean,
        public price: number,
        public rating: number
    ) {}

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    template: template,
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product Listss';
    imageWidth: number = 50;
    imageMargin: number = 2;
    shownImage: boolean = false;
    listFilter: string;//= 'cart';
    errorMessage: string;

    productss: IProduct2[] = [
        //{  //Grabbed from Service now.
        //    "productId": 2,
        //    "productName": "Golden Cart",
        //    "productCode": "GDN-0023",
        //    "releaseDate": "March 18, 2016",
        //    "description": "15 gallon ",
        //    "price": 32.99,
        //    "starRating": 4.2,
        //    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/267334/Shopping-Cart-Icon-3.png",
        //    "calculateDiscount": x => x * 2
        //},
        //{
        //    "productId": 5,
        //    "productName": "Gold",
        //    "productCode": "GDN-0024",
        //    "releaseDate": "Feb 18, 2016",
        //    "description": "Hammer ",
        //    "price": 11.99,
        //    "starRating": 1.2,
        //    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/193438/freehammer.png",
        //    "calculateDiscount": x => x * 2
        //}
    ]; //In typescript use any when don't know or don't care what the datatype is.

    products: IProduct[] = [
        {
            product: "Test product",
            code: "ABC",
            available: true,
            price: 500,
            rating: 2
        },
        {
            product: "Test product 2",
            code: "ABCDEF",
            available: false,
            price: 234,
            rating: 5
        },
        new MyProduct("test product 3", "ASDG", true, 5.32, 1)
    ];

    constructor(private _productService: ProductService) {

    }

    public showImage(product: IProduct) {
        console.log(product);
    }

    public toggleImage(): void {
        this.shownImage = !this.shownImage;
    }

    ngOnInit(): void { //Great way to provide any componnent initialisation and retrieval in this Component Lifecycle Hook event.
        debugger;
        //this.productss = this._productService.getProducts();
       this._productService.getProducts()
            .subscribe(products => this.productss = products,
            error => this.errorMessage = <any> error);

        console.log('In OnInit');
    }

    public onRatingCicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}