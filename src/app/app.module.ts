import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Routes, RouterModule } from "@angular/router";
import { UserService } from "./user.service";
import { UserDetailComponent } from './user-detail/user-detail.component';




/**Routing implementation */
const appRoutes: Routes = [
                            {
                                path: 'login',
                                component: LoginComponent
                            },
                            {
                                path: 'user-registration',
                                component: UserRegistrationComponent
                            },
                            {
                                path: 'user-list',
                                component: UserListComponent
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
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // { enableTracing: true }<-- debugging purposes only
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
