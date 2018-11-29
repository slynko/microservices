import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {HomeAdminComponent} from "./home-admin";
import {HomeReaderComponent,} from "./home-reader";
import {MyBooksReaderComponent} from "./my-books-reader";
import {UsersComponent} from "./users-admin/users.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuard]},
  {path: 'home-reader', component: HomeReaderComponent, canActivate: [AuthGuard]},
  {path: 'my-books-reader', component: MyBooksReaderComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
