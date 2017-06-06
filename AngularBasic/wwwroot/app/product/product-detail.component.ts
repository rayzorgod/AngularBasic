import { Component, OnInit } from '@angular/core';
import template from "./product-detail.component.html";
import { IProduct2 } from './product2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'product-detail',
    moduleId: module.id,
    template: template
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct2;

    constructor(private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void { 
        let id = parseInt(this._route.snapshot.params['id']);   //Let is new Es2015 ... it allows a Blocked scoped variable. Private to this scope. 
        this.pageTitle += ` ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
