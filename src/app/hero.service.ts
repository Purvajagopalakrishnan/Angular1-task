import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    private bookUrl = 'assets/books.json';

  constructor(private http: HttpClient) { }
  getBooks(): Observable<IBook[]> {
      return this.http.get<IBook[]>(this.bookUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),catchError(this.handleError)
        );
  }
  private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if(err.error instanceof ErrorEvent){
          errorMessage = `An error occured: $(err.error.message}`;
      }else{
          errorMessage = `server returned : $(err.status},error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);

  }
}
