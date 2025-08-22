import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly username = 'AlvaroDolorier';
  private readonly password = 'AlvDol11JUNE';
  private loggedIn = false;

  constructor(private router: Router) {}

  login(user: string, pass: string): boolean {
    if (user === this.username && pass === this.password) {
      this.loggedIn = true;
      localStorage.setItem('logged', 'true');
      this.router.navigate(['/books']);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return this.loggedIn || localStorage.getItem('logged') === 'true';
  }
}
