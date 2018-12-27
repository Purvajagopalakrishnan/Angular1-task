import { RouterModule, Routes } from '@angular/router'; 
import { BookViewComponent } from './book-view/book-view.component';
import { BookListComponent } from './books/book-list.component';

export const routes: Routes = [
	{ path: 'view/ :id', component: BookViewComponent },
    { path: '', component:  BookListComponent }
]
	