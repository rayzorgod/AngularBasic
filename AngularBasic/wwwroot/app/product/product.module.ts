import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product-service';

import {
    ButtonModule,
    PanelModule,
    InputTextModule,
    DataTableModule
} from 'primeng/primeng';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            },
        ]),
        ButtonModule,
        PanelModule,
        InputTextModule,
        DataTableModule,
    ],
    exports: [
        ProductListComponent
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}