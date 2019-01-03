import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',

  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  @Input() book: IBook;
 
 
}
