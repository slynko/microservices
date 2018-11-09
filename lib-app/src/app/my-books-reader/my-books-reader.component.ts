import {Component, Inject, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";
import {BookRegistryService} from "../_services";
import {Router} from "@angular/router";
import {BookRecord} from "../_models/bookRecord";
import {BooksRequest} from "../_models/booksRequest";

export interface DialogData {
  bookOrderTypes: string;
  bookOrderType: string;
  dueDate: Date;
}

@Component({
  templateUrl: 'my-books.component.html'
})
export class MyBooksReaderComponent implements OnInit {
  bookRecords: BookRecord[] = [];
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'fromDate', 'dueDate', 'penalty', 'status', 'approved'];

  constructor(private bookService: BookService, private bookRegistryService: BookRegistryService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadAllBookRecords();
  }

  private loadAllBookRecords() {
    this.bookRegistryService.getByLogin().pipe(first()).subscribe(books => {
      this.bookRecords = books;
      let booksRequest = new BooksRequest();
      booksRequest.ids = this.bookRecords.map(book => book.bookId);

      this.bookService.findByIds(booksRequest).pipe(first()).subscribe(books => {
        this.books = books;
      });
    });
  }

  openMyBooks() {
    this.router.navigate(["/my-books-reader"]);
  }

  openAllBooks() {
    this.router.navigate(["/home-reader"]);
  }

  findBookById(id: number) {
    return this.books.find(book => book.id == id);
  }
}

