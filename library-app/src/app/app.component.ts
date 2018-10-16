import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app';
  users;
  constructor(private http: HttpClient) {
     http.get("http://localhost:8003/user")
      .subscribe(resp => {
        this.users = resp;
      });
  }
}
