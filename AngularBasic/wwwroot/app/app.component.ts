import { Component } from '@angular/core';
import template from './app.component.html';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    template: template,
    providers:[]  //Registering the Service with the Provider allows it to be injected in the Component and children Component.
})
export class AppComponent {
    pageTitle: string = "Rays Angular2 playground";
}