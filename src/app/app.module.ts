import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular-4-data-table';



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
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import { HeaderComponent } from './recipe-book/header/header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from './recipe-book/shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-book/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './recipe-book/shopping-list/shopping-edit/shopping-edit.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { OnlineShoppingHeaderComponent } from './online-shopping/header/online-shopping-header.component';
import { CategoryService } from "./online-shopping/services/category.service";
import { ProductService } from "./online-shopping/services/product.service";
import { ShoppingCartService } from "./online-shopping/services/shopping-cart.service";
import { ProductsComponent } from './online-shopping/products/products.component';
import { ShoppingCartComponent } from './online-shopping/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './online-shopping/check-out/check-out.component';
import { OrderSuccessComponent } from './online-shopping/order-success/order-success.component';
import { AdminProductsComponent } from './online-shopping/admin-products/admin-products.component';
import { AdminOrdersComponent } from './online-shopping/admin-orders/admin-orders.component';
import { ProductFormComponent } from './online-shopping/admin/product-form/product-form.component';
import { ProductFilterComponent } from './online-shopping/products/product-filter/product-filter.component';
import { ProductCardComponent } from './online-shopping/product-card/product-card.component';


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
    path: 'recipe-book',
    component: RecipeBookComponent
  },
  {
    path: 'online-shopping',
    component: OnlineShoppingComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'products',
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
    ReactiveLoginComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    OnlineShoppingComponent,
    OnlineShoppingHeaderComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {enableTracing: true}) // { enableTracing: true }<-- debugging purposes only
  ],
  exports: [RouterModule],
  providers: [
    CanActivateViaAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
