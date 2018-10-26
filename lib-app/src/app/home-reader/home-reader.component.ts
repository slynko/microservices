import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";

@Component({
  templateUrl: 'home-reader.component.html'
})
export class HomeReaderComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }


  ngOnInit() {
   this.loadAllBooks();
  }

  deleteUser(id: number) {
    //this.userService.delete(id).pipe(first()).subscribe(() => {
     // this.loadAllUsers()
    //});
  }

  private loadAllBooks() {
    this.bookService.getAll().pipe(first()).subscribe(books => {
      console.log(books);
      this.books = books;
      console.log(this.books);
    });
  }
}
