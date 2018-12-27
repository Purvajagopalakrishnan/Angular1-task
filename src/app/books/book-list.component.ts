import { Component } from "@angular/core";

@Component({
    selector: 'app-books',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']

})
export class BookListComponent{
    pageTitle: string ='Book List';
    number_of_likes=0 ;
    number_of_likes1=0;
    number_of_likes2=0;
    number_of_likes3=0;

   
}