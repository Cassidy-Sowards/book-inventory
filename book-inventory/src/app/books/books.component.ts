import { Component } from '@angular/core';
import { Book } from '../Interfaces/book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books = BOOKS;
  selectedBook?: Book;

  onSelect(book: Book){
    this.selectedBook = book;
  }


}
