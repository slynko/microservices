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

  findByAuthor(author: string) {
    return this.http.get<Book[]>(`${environment.bookServiceUrl}/book/author/${author}`);
  }

  findByTitle(title: string) {
    return this.http.get<Book[]>(`${environment.bookServiceUrl}/book/title/${title}`);
  }

  findByEdition(edition: string) {
    return this.http.get<Book[]>(`${environment.bookServiceUrl}/book/edition/${edition}`);
  }

  findByAuthorAndTitle(author: string, title: string) {
    return this.http.get<Book[]>(`${environment.bookServiceUrl}/book/author/${author}/title/${title}`);
  }

  getById(id: number) {
    return this.http.get(`${environment.bookServiceUrl}/book/` + id);
  }

  add(book: Book) {
    return this.http.post(`${environment.bookServiceUrl}/book/add`, book);
  }

  update(book: Book) {
    return this.http.put(`${environment.bookServiceUrl}/book/` + book.id, book);
  }

  delete(id: number) {
    return this.http.delete(`${environment.bookServiceUrl}/book/` + id);
  }

  findByIds(booksRequest: BooksRequest) {
    return this.http.post<Book[]>(`${environment.bookServiceUrl}/book/searches`, booksRequest);
  }
}
