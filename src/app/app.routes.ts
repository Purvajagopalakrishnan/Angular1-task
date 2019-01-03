import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
    {path: 'detail/:id', component: BookDetailComponent}, 
    {path: '', pathMatch: 'full', component: BookListComponent}  
];
	