import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

import { Book } from '../interfaces/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  selectedBook?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(book: Book){
    this.selectedBook = book;
  }




}
