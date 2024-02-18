import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  login() {
    // Here, you can implement your login logic
    if (this.username === 'mat_user123' && this.password === 'password123') {
      console.log('Login successful');
      // Redirect the user to another page or perform any other actions upon successful login
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}
