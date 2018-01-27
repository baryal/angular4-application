import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let url: string = state.url;
    console.log('Url:'+ url);
    if (this.authService.isUserLoggedIn) {
      return true;
    }
    //this.authService.setRedirectUrl(url); if we have lots of route.
    //reference: http://www.concretepage.com/angular-2/angular-2-4-route-guards-canactivate-and-canactivatechild-example
    this.router.navigate([this.authService.getLoginUrl()], {queryParams: {returnUrl: url}});
    return false;
  }

}
