import { Component } from "@angular/core";

import { HeroService } from "../hero.service";
import { IBook } from "../book";
import { Router } from "@angular/router";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
   

})
export class BookListComponent{
    pageTitle: string ='Book List';
    books:IBook[];
   
    constructor(private service: HeroService,
        private router: Router) { }
   
   ngOnInit(): void{
    this.service.getBooks().subscribe(
        books => this.books = books
      );
   }

   onclick(read: IBook) {
    this.router.navigate([`detail/${read.id}`]);
   }
    
}