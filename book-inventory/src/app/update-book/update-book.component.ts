import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../interfaces/book'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

@Input() book?: Book;
@Output() dontShow: EventEmitter<boolean> = new EventEmitter;
faSquareXmark = faSquareXmark;

title: string = "";
author: string = "";
genre: string = "";
rating: string = "";
comment: string = "";

  constructor() {}

  ngOnInit() {
    this.title = this.book?.title as string;
    this.author = this.book?.author as string;
    this.genre = this.book?.genre as string;
    this.rating = this.book?.review?.rating as string;
    this.comment = this.book?.review?.comment as string;

  }

  clear() {
  this.dontShow.emit(true);
  }

}
