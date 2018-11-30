import {Component, Inject, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";
import {BookRegistryService} from "../_services";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {BookRecordRequest} from "../_models/bookRecordRequest";
import {Router} from "@angular/router";

export interface DialogData {
  bookOrderTypes: string;
  bookOrderType: string;
  dueDate: Date;
}

@Component({
  templateUrl: 'home-reader.component.html'
})
export class HomeReaderComponent implements OnInit {
  books: Book[] = [];
  visibleBooks: Book[] = [];
  bookOrderTypes: string[];
  bookOrderType: string;
  dueDate: Date;
  title: string;
  author: string;
  loaded: boolean;
  loading: boolean;
  bookAdded: boolean;
  bookNotAdded: boolean;
  login: string;

  constructor(private bookService: BookService, private bookRegistryService: BookRegistryService,
              public dialog: MatDialog, private router: Router) {
    this.bookOrderTypes = ["Home", "Library"];
    this.login = localStorage.getItem("login");
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {
        bookOrderTypes: this.bookOrderTypes,
        bookOrderType: this.bookOrderType,
        dueDate: this.dueDate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let self = this;
      this.bookOrderType = result.bookOrderType;
      this.dueDate = result.dueDate;

      if (this.bookOrderType == 'Library' || (this.bookOrderType !== undefined && this.dueDate !== undefined)) {
        this.readBook(id);
        this.bookAdded = true;

        setTimeout(function () {
          self.bookAdded = false;
        }, 7000);
      } else {
        this.bookNotAdded = true;

        setTimeout(function () {
          self.bookNotAdded = false;
        }, 7000);
      }

    });
  }


  ngOnInit() {
    this.loadAllBooks();
  }

  private loadAllBooks() {
    this.bookService.getAll().pipe(first()).subscribe(books => {
      this.books = books;
      this.visibleBooks = books;
      this.loaded = true;
    });
  }

  readBook(id: number) {
    let login = localStorage.getItem("login");
    let bookRecordRequest: BookRecordRequest = new BookRecordRequest();
    bookRecordRequest.status = this.bookOrderType;
    bookRecordRequest.dueDateTime = this.dueDate;

    this.bookRegistryService.addBookRecord(login, id, bookRecordRequest).pipe(first()).subscribe(books => {
    });

  }

  searchBooks() {
    let self = this;
    this.loading = true;
    setTimeout(function () {
      if (self.title && self.author) {
        self.visibleBooks = self.books.filter(book => book.title.includes(self.title) && book.author.includes(self.author));
      } else if (self.title && !self.author) {
        self.visibleBooks = self.books.filter(book => book.title.includes(self.title));
      } else if (!self.title && self.author) {
        self.visibleBooks = self.books.filter(book => book.author.includes(self.author));
      } else {
        self.visibleBooks = self.books;
      }
      self.loading = false;
    }, 1000);
  }

  openMyBooks() {
    this.router.navigate(["/my-books-reader"]);
  }

  openAllBooks() {
    this.router.navigate(["/home-reader"]);
  }
}


@Component({
  selector: 'book-order-dialog',
  templateUrl: 'book-order-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
