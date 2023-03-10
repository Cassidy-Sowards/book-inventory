import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    
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

    
    
  }

}
