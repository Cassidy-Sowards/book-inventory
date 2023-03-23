import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() book?: Book;
  updateBook?: Book;
  newUpdateBook?:Book;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    
  }

  onUpdateClick(): void {
    this.updateBook = this.book;
  }

  clearUpdateBook(event: boolean) {
    if(event === true){
      this.updateBook = undefined;
    }
  }

  uppdateCurrentBook(event: Book){
    console.log("Inside update in the details page");
    this.newUpdateBook = event;
    this.newUpdateBook.id = this.book?.id
    this.bookService.updateBook(this.newUpdateBook).subscribe();
    //window.location.reload();
  }

}
