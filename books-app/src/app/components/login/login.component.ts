import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const success = this.authService.login(this.username, this.password);
    if (!success) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
