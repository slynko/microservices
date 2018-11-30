import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Book} from "../_models/book";
import {BooksRequest} from "../_models/booksRequest";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Book[]>(`${environment.bookServiceUrl}/book`);
  }

  findByIds(booksRequest: BooksRequest) {
    return this.http.post<Book[]>(`${environment.bookServiceUrl}/book/searches`, booksRequest);
  }
}
