import { Component, Input } from '@angular/core';

import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  @Input() book?: Book;
  updateBook?: Book;

  onUpdateClick(): void {
    this.updateBook = this.book;
  }

  clearUpdateBook(event: boolean) {
    if(event === true){
      this.updateBook = undefined;
    }
  }

}
