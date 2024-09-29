import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatLabel, ReactiveFormsModule , CommonModule , MatInputModule, MatCardModule, MatButtonModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.http
      .get(`http://localhost:3000/api/login`, { params: { username, password } })
      .subscribe(
        (response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/user-info']);
        },
        (error) => {
          alert('Usuario o contraseña incorrectos');
        }
      );
  }
}
