import {Component, Inject, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {BookService} from '../_services';
import {Book} from "../_models/book";
import {BookRegistryService} from "../_services";
import {Router} from "@angular/router";
import {BookRecord} from "../_models/bookRecord";
import {BooksRequest} from "../_models/booksRequest";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";

export interface DialogData {
  bookOrderTypes: string;
  bookOrderType: string;
  dueDate: Date;
}

@Component({
  templateUrl: 'book-requests.component.html'
})
export class BookRequestsComponent implements OnInit {
  bookRequests: BookRecord[] = [];
  displayedColumns: string[] = ['id', 'login', 'bookId', 'bookStatus', 'fromDate',
    'dueDate', 'penalty', 'approved', 'approve'];
  login: string;

  constructor(private router: Router,
              private bookRegistryService: BookRegistryService) {
    this.login = localStorage.getItem("login");

  }

  ngOnInit() {
    this.loadAllBookRequests();
  }
  private loadAllBookRequests() {
    this.bookRegistryService.getAll().pipe(first()).subscribe(bookRequests => {
      this.bookRequests = bookRequests;
    });
  }

  approve(id: number) {
    this.bookRegistryService.approve(id).pipe(first()).subscribe(bookRecord => {
      this.bookRequests.filter(br => br.id === bookRecord.id)
        .map(br => br.approved = bookRecord.approved);
    });
  }

  addLibrarian() {
    this.router.navigate(["/register"]);
  }
}

