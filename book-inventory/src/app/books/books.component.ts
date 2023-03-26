import { Component, OnInit } from '@angular/core';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
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

  faSquareXmark = faSquareXmark

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => this.books = books);
                                  //grab return value then set local variable to return value
    
  }


  removeBook(book: Book): void {
    this.books = this.books.filter(b => b != book);
    this.bookService.deleteBook(book).subscribe();
  }




}
