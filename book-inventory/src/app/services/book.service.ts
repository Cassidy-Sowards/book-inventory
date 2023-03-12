import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, of } from 'rxjs'
import { Book } from '../interfaces/book';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "http://localhost:5000/books"; 
  private currentBooks: Book[] = []; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  deleteBook(id: number): Observable<Book>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Book>(url, this.httpOptions)
  }

  addBook(book: Book): Observable<Book> {
    console.log("Inside add book");
   return this.http.post<Book>(this.apiUrl, book, this.httpOptions)
  }

  //storing all the current books on the service
  storeBooks(cb: Book[]) {
    console.log("Inside store books passed is " + cb)
    this.currentBooks = cb;
    console.log("currentBooks in service is" + this.currentBooks);
  }

  //retrieving stored books on service
  retrieveStoredBooks(): Book[] {
    return this.currentBooks;
  }

  //helper method for determining the ID of the next book to be added
  getNewBookId(): number {
    console.log("Current Books is " + this.currentBooks);
    let currentBook = this.currentBooks[this.currentBooks.length -1];
    let currentBookId = currentBook.id
    return currentBookId + 1;
  }
 }
