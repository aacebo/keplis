import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private readonly _router: Router) { }

  canActivate() {
    return !localStorage.getItem('keplis:token') || this._router.createUrlTree(['']);
  }
}
