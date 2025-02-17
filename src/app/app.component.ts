import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';

  // Define form group and form controls with validation
  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  // Variable to track form submission
  submitted: boolean = false;

  // Getters for easier validation checking in template
  get userName() { return this.formdata.get('userName'); }
  get email() { return this.formdata.get('email'); }
  get age() { return this.formdata.get('age'); }
  get address() { return this.formdata.get('address'); }

  // Function to handle form submission
  onClickSubmit() {
    this.submitted = true;
    if (this.formdata.valid) {
      console.log('Form Submitted Successfully:', this.formdata.value);
    } else {
      console.log('Form Invalid! Please check the fields.');
    }
  }
}
