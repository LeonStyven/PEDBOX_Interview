import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccessService } from '../../../services/access.service';
import { User } from '../../../interfaces/User.interface';

@Component({
  selector: 'app-sign-in-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in-page.component.html',
  styles: [`
    input::placeholder {
      opacity: 0.4;
    }
    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  `]
})
export class SignInPageComponent {
  private accessService = inject(AccessService);
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (!this.signInForm.valid) return;

    const obj: User = {
      name: this.signInForm.value.name,
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };
    this.accessService.register(obj).subscribe();
  }

  getFieldError(fieldName: string): string {
    const field = this.signInForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters`;
      }
    }
    return '';
  }
}
