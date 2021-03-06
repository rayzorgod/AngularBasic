﻿import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot): boolean {

        const id = parseInt(route.url[1].path);

        if (isNaN(id) || id < 1) {
            alert("Invalid product Id");  //In real world navigate to page with the error but this will do for now.
            //start a new navigation to redirect to list page
            this.router.navigate(["/products"]);
            //abort current navigation
        }
        return true;
    }

}
