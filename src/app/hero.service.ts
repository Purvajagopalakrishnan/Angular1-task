import { Injectable } from '@angular/core';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  books: IBook[] = [
    {
        id: 1,
        bookName: "Home",
        imageUrl: "../assets/images/home.jpg",
        bookDescription: "This book is all about two children"          

    },
    {
        id: 2,
        bookName: "Homeland",
        imageUrl: "../assets/images/homeland.jpg",
        bookDescription: "This book is about homeland"          

    },
    {
        id: 3,
        bookName: "Lion",
        imageUrl: "../assets/images/lion.jpg",
        bookDescription: "This book is about lion's den" 
    },
    {
        id: 4,
        bookName: "smiley",
        imageUrl: "../assets/images/smiley.jpg",
        bookDescription: "This book is about smiley's world" 
    }

]
  getBooks(){
    return this.books;
  }
}
