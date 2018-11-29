import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AlertService, AuthenticationService, UserService, BookService, BookRegistryService} from './_services';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DemoMaterialModule} from "../material-module";
import {MatNativeDateModule} from "@angular/material";
import {HomeAdminComponent} from "./home-admin";
import {DialogOverviewExampleDialog, HomeReaderComponent} from "./home-reader";
import {MyBooksReaderComponent} from "./my-books-reader";
import {NavigationComponent} from "./navigation/navigation.component";
import {UsersComponent} from "./users-admin/users.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    UsersComponent,
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeAdminComponent,
    HomeReaderComponent,
    MyBooksReaderComponent,
    DialogOverviewExampleDialog,
    NavigationComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    BookService,
    BookRegistryService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})

export class AppModule {
}
