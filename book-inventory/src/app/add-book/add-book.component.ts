import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
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
    id: 0,
    title: "",
    author: "",
    genre: "",
    review: {
    }
  } as any;

  request.id = 500
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

  let newBook = this.createSearchRequest();
    
  this.bookService.addBook(newBook as Book);
    
  }

}
