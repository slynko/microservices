import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Book} from "../_models/book";
import {BookRecordRequest} from "../_models/BookRecordRequest";

@Injectable()
export class BookRegistryService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Book[]>(`${environment.bookRegistryServiceUrl}/book-record`);
    }

    addBookRecord(login: string, bookId: number, bookRecordRequest: BookRecordRequest) {
      return this.http.post(`${environment.bookRegistryServiceUrl}/book-record/${login}/${bookId}`, bookRecordRequest);
    }

    add(book: Book) {
        return this.http.post(`${environment.bookServiceUrl}/book/add`, book);
    }

    // update(book: Book) {
    //     return this.http.put(`${environment.bookServiceUrl}/book/` + book.id, book);
    // }
    //
    // delete(id: number) {
    //     return this.http.delete(`${environment.bookServiceUrl}/book/` + id);
    // }
}
