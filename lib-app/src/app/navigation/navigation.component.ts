import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {
  login: string;
  authorities: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    authenticationService.isLoggedIn().subscribe(isLoggedIn => {
      this.login = localStorage.getItem("login");
      this.authorities = localStorage.getItem("authorities");
    })
  }

  ngOnInit() {
    this.login = localStorage.getItem("login");
    this.authorities = localStorage.getItem("authorities");
  }

  openMyBooks() {
    this.router.navigate(["/my-books-reader"]);
  }

  openAllBooks() {
    this.router.navigate(["/home-reader"]);
  }


  openAllUsers() {
    this.router.navigate(["/users"]);
  }

  openAllLibrarians() {
    this.router.navigate(["/librarians"]);
  }

  openAllBookRequests() {
    this.router.navigate(["/book-requests"]);
  }

  logout() {
    this.router.navigate(["/"]);
  }
}
