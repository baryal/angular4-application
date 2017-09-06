import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {Routes, RouterModule} from "@angular/router";
import {UserService} from "./services/user.service";
import {UserDetailComponent} from './user-detail/user-detail.component';
import {MyDatePickerModule} from "mydatepicker";
import {ReactiveLoginComponent} from "./login/reactive-login.component";
import {CanActivateViaAuthGuard} from "./authentication/CanActivateViaAuthGuard";


/**Routing implementation */
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reactive-login',
    component: ReactiveLoginComponent
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'user-details',
    component: UserDetailComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

/**Module Annotation class. */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserRegistrationComponent,
    UserDetailComponent,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) // { enableTracing: true }<-- debugging purposes only
  ],
  exports: [RouterModule],
  providers: [
    CanActivateViaAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
