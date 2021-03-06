import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  constructor(private router:Router) { }
  CanActivate(){
    var token=localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
