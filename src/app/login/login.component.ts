import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginMode = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
 
    const username = form.value.username;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.loginService.login(username, password).subscribe(res => {
        console.log(res);
        this.router.navigate(['./recipes']);
      },
      error => {
        console.log(error);
      });
    } else { 
      const email = form.value.email;
      this.loginService.signup(username, email, password).subscribe(res => {
        console.log(res);
      },
      error => {
        console.log(error);
      });
    }

    form.reset();
  }
}
