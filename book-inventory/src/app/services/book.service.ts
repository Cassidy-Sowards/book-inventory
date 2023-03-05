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
}
