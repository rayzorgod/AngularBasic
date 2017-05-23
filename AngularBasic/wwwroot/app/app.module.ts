import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './errors/not-found.component'; 

import {
    ButtonModule,
    PanelModule,
    InputTextModule,
    DataTableModule
} from 'primeng/primeng';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        ButtonModule,
        PanelModule,
        InputTextModule,
        DataTableModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TestComponent,
        ProductListComponent,
        PageNotFoundComponent,
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
