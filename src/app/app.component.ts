import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
  
  // Variables to store user inputs
  userName: string = "";  
  email: string = "";
  age: number | null = null;
  address: string = "";
  submitted: boolean = false;

  // Define form group and form controls
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl("")
  });

  // Function to handle form submission
  onClickSubmit(data: { userName: string; email: string; age: number; address: string }) {
    this.userName = data.userName;
    this.email = data.email;
    this.age = data.age;
    this.address = data.address;
    this.submitted = true; // Display the output
  }
}
