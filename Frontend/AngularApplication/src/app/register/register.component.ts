import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  focused = true;
  registerError = false;
  isRegisterInProgress = false;
  showValidations = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    localStorage.clear();
    sessionStorage.clear();
  }

  ngOnInit() {}

  handleRegister(data: any) {}

  handleError(error: any) {
    if (error.status === 401) {
      this.registerError = true;
    }
  }
}
