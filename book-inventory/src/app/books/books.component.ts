import { Component } from '@angular/core';
import { Book } from '../Interfaces/book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
 /* book: Book = {
    id: 1,
    title: "Maximum Ride: The Angel Experiment",
    author: "James Paterson",
    genre: "Sci-fi"
  } */

  books = BOOKS

}
