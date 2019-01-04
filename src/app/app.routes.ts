import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookDetailGuard } from './book-detail.guard';

export const routes: Routes = [
    {path: 'detail/:id', canActivate: [ BookDetailGuard], component: BookDetailComponent}, 
    {path: '', pathMatch: 'full', component: BookListComponent}  
];
	