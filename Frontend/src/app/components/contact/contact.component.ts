import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule to use reactive forms
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup; // Declare the form group

  constructor(private fb: FormBuilder) {
    // Inject FormBuilder
    // Initialize form with validation rules
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name is required and at least 3 characters
      email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email format
      message: ['', [Validators.required, Validators.minLength(10)]], // Message is required and at least 10 characters
    });
  }

  // Getter methods for form controls to simplify the template binding
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you can send form data to a backend or API
    } else {
      console.log('Form is not valid');
      this.contactForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
    }
  }
}
