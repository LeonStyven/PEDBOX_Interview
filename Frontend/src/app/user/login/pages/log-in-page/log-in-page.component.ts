import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AccessService } from './../../../services/access.service';
import { UserLogin } from '../../interfaces/user-login-interface';

@Component({
  selector: 'app-log-in-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './log-in-page.component.html',
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
export class LogInPageComponent {
  private accessService = inject(AccessService)
  private router = inject(Router);
  logInForm: FormGroup;


  constructor(private fb: FormBuilder){
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if(!this.logInForm.valid) return;

    const obj: UserLogin ={
      email: this.logInForm.value.email,
      password: this.logInForm.value.password,
    };
    this.accessService.login(obj).subscribe({
      next:(data)=>{
        if(data.isSuccess){
          localStorage.setItem("token", data.token)
          this.router.navigate(['subreddits'])
        }
        else{
          alert(data.message)
        }
      }
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.logInForm.get(fieldName);
    if (field?.errors && field.touched) {
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
