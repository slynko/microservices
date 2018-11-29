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
  templateUrl: 'librarians.component.html'
})
export class LibrariansComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'login', 'firstName', 'lastName', 'email', 'blocked', 'delete'];
  login: string;

  constructor(private router: Router,
              private userService: UserService) {
    this.login = localStorage.getItem("login");

  }

  ngOnInit() {
    this.loadAllLibrarians();
  }

  private loadAllLibrarians() {
    this.userService.getAllLibrarians().pipe(first()).subscribe(librarians => {
      this.users = librarians;
    });
  }

  delete(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }

  addLibrarian() {
    this.router.navigate(["/register"]);
  }
}

