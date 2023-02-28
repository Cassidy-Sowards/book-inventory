import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Book } from '../interfaces/book';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }
}
