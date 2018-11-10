import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {Observable, Subject} from "rxjs/index";

@Injectable()
export class AuthenticationService {
  loggedIn: boolean;
  private logger = new Subject<boolean>();

  constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { username: username, password: password },  { observe: 'response' })
            .pipe(map(user => {
              const token = user.headers.get("Authorization").replace("Bearer ", "");
                // login successful if there's a jwt token in the response
                if (token) {
                  let jwtData = token.split('.')[1];
                  let decodedJwtJsonData = window.atob(jwtData);
                  let decodedJwtData = JSON.parse(decodedJwtJsonData);
                  console.log(decodedJwtData);
                  console.log(decodedJwtData.sub);

                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUserToken', token);
                    localStorage.setItem('authorities', decodedJwtData.authorities);
                    localStorage.setItem('login', decodedJwtData.sub);
                  this.loggedIn = true;
                  this.logger.next(this.loggedIn);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUserToken');
        localStorage.removeItem('authorities');
        localStorage.removeItem('login');
        this.loggedIn = false;
      this.logger.next(this.loggedIn);
    }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

}
