import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";
import {BookRegistryService} from "../_services";

@Component({
  templateUrl: 'home-reader.component.html'
})
export class HomeReaderComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private bookRegistryService: BookRegistryService) {
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
      this.books = books;
    });
  }

  readBook(id: number) {
    let login = localStorage.getItem("login");
    this.bookRegistryService.addBookRecord(login, id).pipe(first()).subscribe(books => {
      console.log("test");
    });;
  }
}
