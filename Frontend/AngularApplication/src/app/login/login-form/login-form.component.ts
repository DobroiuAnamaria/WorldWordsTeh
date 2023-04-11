import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;
  @ViewChild('identityInput') identityInput: ElementRef | undefined;

  @Output('successfulLogin')
  successfulLogin: EventEmitter<any> = new EventEmitter();

  @Output('loginFailure')
  loginFailure: EventEmitter<any> = new EventEmitter();

  @Output('forgotPassword')
  forgotPassword: EventEmitter<any> = new EventEmitter();

  loginError: boolean | undefined;
  isLoading: boolean | undefined;

  loginForm: FormGroup | undefined;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onLogin(event: any) {
    this.blurFormInputs();
    this.isLoading = true;
    // TODO: service.login
  }

  private blurFormInputs() {
    if (this.identityInput) {
      this.identityInput.nativeElement.blur();
    }
    if (this.passwordInput) {
      this.passwordInput.nativeElement.blur();
    }
  }
}
