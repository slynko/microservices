﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { username: username, password: password },  { observe: 'response' })
            .pipe(map(user => {
              const token = user.headers.get("Authorization").replace("Bearer ", "");
              console.log(token);
              let jwtData = token.split('.')[1];
              let decodedJwtJsonData = window.atob(jwtData);
              let decodedJwtData = JSON.parse(decodedJwtJsonData);
              console.log(decodedJwtData);
                // login successful if there's a jwt token in the response
                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUserToken', token);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUserToken');
    }
}