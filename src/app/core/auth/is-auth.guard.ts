import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsAuthGuard implements CanActivate {
  canActivate() {
    return !!localStorage.getItem('keplis:token');
  }
}
