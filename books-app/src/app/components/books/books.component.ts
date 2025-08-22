import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  newBook: any = { title: '', author: '', year: '', genre: '' };

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe(data => this.books = data);
  }

  addBook() {
    this.booksService.addBook(this.newBook).subscribe(() => {
      this.newBook = { title: '', author: '', year: '', genre: '' };
      this.loadBooks();
    });
  }

  editBook(book: any) {
    this.booksService.updateBook(book._id, book).subscribe(() => this.loadBooks());
  }

  deleteBook(id: string) {
    this.booksService.deleteBook(id).subscribe(() => this.loadBooks());
  }

  toggleAvailability(book: any) {
    this.booksService.toggleAvailability(book._id).subscribe(() => this.loadBooks());
  }
}
