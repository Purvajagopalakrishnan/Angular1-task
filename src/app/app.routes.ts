import { RouterModule, Routes } from '@angular/router'; 
import { BookViewComponent } from './book-view/book-view.component';
import { BookListComponent } from './books/book-list.component';

export const routes: Routes = [
    { path: 'book-view/:id', component: BookViewComponent },
    { path: 'view/:id', component: BookViewComponent },
   // {path: 'search', component: BookViewComponent},
  //  {path: 'search/:term', component: BookViewComponent},
    { path: '', pathMatch: 'full', component:  BookListComponent }
];
	