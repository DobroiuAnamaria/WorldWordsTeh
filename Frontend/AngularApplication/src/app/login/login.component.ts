import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  focused = true;
  forgotPassword = false;
  loginError = false;
  isLoginInProgress = false;
  showValidations = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    localStorage.clear();
    sessionStorage.clear();
  }

  ngOnInit() {}

  handleLogin(data: any) {}

  handleError(error: any) {
    if (error.status === 401) {
      this.loginError = true;
    }
  }
}
