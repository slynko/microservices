import {Component, Inject, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";
import {BookRegistryService} from "../_services";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

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
  bookOrderTypes: String[];
  bookOrderType: String;
  dueDate: Date;

  constructor(private bookService: BookService, private bookRegistryService: BookRegistryService,
              public dialog: MatDialog) {
    this.bookOrderTypes = ["Home", "In Library"];
    console.log(this.bookOrderTypes);
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
      this.bookOrderType = result.bookOrderType;
      this.dueDate = result.dueDate;

      this.readBook(id); //TODO: continue here add book order call
    });
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
    });

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
