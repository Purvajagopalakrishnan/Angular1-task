import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { IBook } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

id:number;
books: IBook[];
required_book :IBook;
index:number;
 
  constructor(private route: ActivatedRoute, private router: Router, public service: HeroService) {
    this.books= this.service.getBooks();
   
   }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.id = params['id'];
    for(let book of this.books)
    {
      if(book.id == this.id)
      {
        this.required_book=book;
        console.log(this.required_book);
      }
    }
  
  });
 

}
onclick() {
  this.index=0;
  this.index=this.required_book.id;

  this.router.navigate([`detail/${this.index+1}`]);
 }
}