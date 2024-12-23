import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isLoading: boolean = false;

  login(): void {
    console.log('Logging in:', { email: this.email, password: this.password });
    // Add your login logic here
  }

  onSubmit() {
    // Handle login logic
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signInWithGoogle() {
    // Handle Google sign-in
  }

  signInWithFacebook() {
    // Handle Facebook sign-in
  }
}
