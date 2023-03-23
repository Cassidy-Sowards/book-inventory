import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../interfaces/book'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

@Input() book: Book = {
  title: "",
  author: "",
  genre: ""
};
@Output() dontShow: EventEmitter<boolean> = new EventEmitter;
@Output() updatedBook: EventEmitter<Book> = new EventEmitter;
faSquareXmark = faSquareXmark;
rating: string = "";
comment: string = "";

  constructor() {}

  ngOnInit() {
    if(this.book.review){
      this.rating = this.book.review.rating;
      this.comment = this.book.review.comment;
    }

  }

  clear() {
  this.dontShow.emit(true);
  }

  onSubmit(){

    let upBook: Book = this.book

    if(this.rating != "" && this.comment != ""){
      upBook.review = {
        rating: this.rating,
        comment: this.comment
      }
    }
    else if(this.rating != "" && this.comment === "") {
      alert("Please add both a rating and review, do not leave one blank");
    }
    else if(this.rating === "" && this.comment != ""){
      alert("Please add both a rating and review, do not leave one blank");
    }
    console.log("submitting and emitting");
    this.updatedBook.emit(upBook);

  }

}
