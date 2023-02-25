import { Component, Input } from '@angular/core';

import { Book } from '../Interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  @Input() book?: Book;

}
