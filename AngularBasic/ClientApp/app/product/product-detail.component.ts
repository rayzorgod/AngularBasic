import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct2 } from "./product2";

@Component({
    selector: "product-detail",
    templateUrl: "./product-detail.component.html",
})
export class ProductDetailComponent implements OnInit {
    public pageTitle: string = "Product Detail";
    public product: IProduct2;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit(): void {
        const id = parseInt(this.route.snapshot.params.id);   //Let is new Es2015 ... it allows a Blocked scoped variable. Private to this scope.
        this.pageTitle += ` ${id}`;
    }

    public onBack(): void {
        this.router.navigate(["/products"]);
    }

}
