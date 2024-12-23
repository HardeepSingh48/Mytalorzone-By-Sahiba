import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;
  showPassword: boolean = false;
  isLoading: boolean = false;

  signup(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signing up:', { email: this.email, password: this.password });
    // Add your signup logic here
  }


  onSubmit() {
    // Handle signup logic
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signUpWithGoogle() {
    // Handle Google sign-up
  }

  signUpWithFacebook() {
    // Handle Facebook sign-up
  }
}
