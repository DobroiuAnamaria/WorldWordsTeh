import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Input
    }
  ]
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;
  @ViewChild('confirmPasswordInput') confirmPasswordInput:
    | ElementRef
    | undefined;
  @ViewChild('fullNameInput') fullNameInput: ElementRef | undefined;

  @Output('successfulRegister')
  successfulRegister: EventEmitter<any> = new EventEmitter();

  @Output('registerFailure')
  registerFailure: EventEmitter<any> = new EventEmitter();

  registerError: boolean | undefined;
  isLoading: boolean | undefined;

  registerForm: FormGroup | undefined;

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  onRegister(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const data = new User({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
    console.log(data);
    this.blurFormInputs();
    this.isLoading = true;
    // TODO: service.register
    this.userService.register(data).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  private blurFormInputs() {
    if (this.fullNameInput) {
      this.fullNameInput.nativeElement.blur();
    }
    if (this.confirmPasswordInput) {
      this.confirmPasswordInput.nativeElement.blur();
    }
    if (this.passwordInput) {
      this.passwordInput.nativeElement.blur();
    }
  }
}
