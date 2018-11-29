import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.userServiceUrl}/user`);
    }

  getAllLibrarians() {
    return this.http.get<User[]>(`${environment.userServiceUrl}/user/librarian`);
  }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.userServiceUrl}/user`, user);
    }

    registerLibrarian(user: User) {
     return this.http.post(`${environment.userServiceUrl}/user/librarian`, user);
    }

    blockUnblock(id: number) {
        return this.http.post<User>(`${environment.userServiceUrl}/user/` + id, null);
    }

    delete(id: number) {
        return this.http.delete(`${environment.userServiceUrl}/user/` + id);
    }
}
