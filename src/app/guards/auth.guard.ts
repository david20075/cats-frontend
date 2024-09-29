import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const user = localStorage.getItem('user');
      if (user) {
        return true;
      }
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}
