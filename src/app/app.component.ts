import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{pageTitle}}</h1>
 <a [routerLink]="['/view/id']">Image1</a>
 
 <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string ='Books page';
}
