import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { IProduct2 } from "./product2";

@Injectable()
export class ProductService {

    private productUrl = "api/products/products.json";

    constructor(private http: Http) { }

    public getProducts(): Observable<IProduct2[]> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <IProduct2[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getProductsOld(): IProduct2[] {
        return [
            {
                productId: 2,
                productName: "Golden Cart",
                productCode: "GDN-0023",
                releaseDate: "March 18, 2016",
                description: "15 gallon ",
                price: 32.99,
                starRating: 4.2,
                imageUrl: "https://openclipart.org/image/300px/svg_to_png/267334/Shopping-Cart-Icon-3.png",
                calculateDiscount: x => x * 2,
            },
            {
                productId: 5,
                productName: "Gold",
                productCode: "GDN-0024",
                releaseDate: "Feb 18, 2016",
                description: "Hammer ",
                price: 11.99,
                starRating: 1.2,
                imageUrl: "https://openclipart.org/image/300px/svg_to_png/193438/freehammer.png",
                calculateDiscount: x => x * 2,
            },
        ];
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server errror");
    }
}
