import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUserToken = localStorage.getItem('currentUserToken');
        console.log("here");
        console.log(currentUserToken);
        if (currentUserToken) {
          console.log("here1")
            request = request.clone({
                setHeaders: { 
                    Authorization: "Bearer " + currentUserToken
                }
            });
        }

        return next.handle(request);
    }
}
