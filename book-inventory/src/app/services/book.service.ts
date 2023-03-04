import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, of } from 'rxjs'
import { Book } from '../interfaces/book';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "http://localhost:5000/books"

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
