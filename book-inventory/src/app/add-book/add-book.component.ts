import { Component, OnInit, Output } from '@angular/core';
import { BookService } from '../services/book.service';
import { BooksComponent } from '../books/books.component';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  title: string = "";
  author: string = "";
  genre: string = "";
  rating: string = "";
  comment: string = "";

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    
  }


createSearchRequest(): object {
  let request = {
    "review": {
    }
  } as any;

  //request.id = 500
  request.title = this.title;
  request.author = this.author;

  if(this.genre){
    request.genre = this.genre
  }
  
  if(this.rating){
    request.review.rating = this.rating;
  }
  
  if(this.comment){
    request.review.comment = this.comment;
  }
  
  console.log(request);

  return request;
}

  onSubmit(): void {
    if(this.title === ""){
      alert("Please enter a title");
      return
    }
    if(this.author === ""){
      alert("Please enter an author ");
      return
    }

  const newBook = {
    title: this.title,
    author: this.author,
    genre: this.genre,
    review: {
      rating: this.rating,
      comment: this.comment
    }
  }

this.bookService.addBook(newBook as Book).subscribe();
    
}

}
