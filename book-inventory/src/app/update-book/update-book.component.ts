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

constructor() {}

ngOnInit() {

}

clear() {
  this.dontShow.emit(true);
}

}
