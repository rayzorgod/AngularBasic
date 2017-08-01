import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { StarComponent } from "../shared/star.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductListComponent } from "./product-list.component";
import { ProductService } from "./product-service";

import {
    ButtonModule,
    DataTableModule,
    InputTextModule,
    PanelModule,
} from "primeng/primeng";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            {
                path: "product/:id",
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent,
            },
        ]),
        ButtonModule,
        PanelModule,
        InputTextModule,
        DataTableModule,
    ],
    exports: [
        ProductListComponent,
    ],
    providers: [
        ProductService,
        ProductDetailGuard,
    ],
})
export class ProductModule {}
