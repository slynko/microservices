﻿import {Component, Inject, OnInit} from '@angular/core';
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
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'login', 'firstName', 'lastName', 'email', 'role', 'blocked', 'block'];
  login: string;

  constructor(private userService: UserService) {
    this.login = localStorage.getItem("login");

  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  blockUnblock(id: number) {
    this.userService.blockUnblock(id).pipe(first()).subscribe(user => {
      this.users.filter(u => u.id === user.id)
        .map(u => u.isBlocked = user.isBlocked);
    });
  }
}

