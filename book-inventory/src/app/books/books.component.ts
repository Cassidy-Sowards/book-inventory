import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { faSquareXmark, faBook } from '@fortawesome/free-solid-svg-icons';


import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  selectedBook?: Book;

  faSquareXmark = faSquareXmark;
  faBook = faBook;

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => this.books = books);
                                  //grab return value then set local variable to return value
    
  }


  removeBook(book: Book): void {
    this.openDialog();
   // this.books = this.books.filter(b => b != book);
    //this.bookService.deleteBook(book).subscribe();
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "200px";
    dialogConfig.width = "350px";

    const dialogoRef = this.dialog.open(WarningDialogComponent, dialogConfig);

    dialogoRef.afterClosed().subscribe(result => {
      if(result === "cancel") {
        console.log("canceled");
      }
      else if(result === "submit"){
        console.log("ready to submit");
      }
    })
  }




}
