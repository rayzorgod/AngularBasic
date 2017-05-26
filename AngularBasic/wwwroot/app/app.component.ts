import { Component } from '@angular/core';
import template from './app.template.html';
import { ProductService } from './product/product-service'

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    template: template,
    providers:[ ProductService ]  //Registering the Service with the Provider allows it to be injected in the Component and children Component.
})
export class AppComponent {
    pageTitle: string = "Rays Angular2 playground";
}