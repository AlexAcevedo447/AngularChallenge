import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenValidatorGuard implements CanActivate {
  token:string|null;
  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
  }

  private validateToken(token: string | null) {
    if (typeof token == 'string' && token.trim().length > 0 && token !== null) {
      
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    

    return this.validateToken(this.token);
  }
}
