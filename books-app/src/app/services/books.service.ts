import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private apiUrl = 'https://expert-robot-5gprvvv5vx7924jjv-8080.app.github.dev/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: string, book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  toggleAvailability(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/availability/toggle`, {});
  }
}
