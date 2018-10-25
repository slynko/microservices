import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';

@Component({
  templateUrl: 'home-reader.component.html'
})
export class HomeReaderComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
   // this.currentUser = localStorage.getItem('currentUserToken');
  }

  ngOnInit() {
   // this.loadAllUsers();
  }

  deleteUser(id: number) {
    //this.userService.delete(id).pipe(first()).subscribe(() => {
     // this.loadAllUsers()
    //});
  }

  private loadAllUsers() {
   // this.userService.getAll().pipe(first()).subscribe(users => {
   //   this.users = users;
    //});
  }
}
