import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameControl: FormControl;
  userloginControl: FormGroup;
  userRegisterControl: FormGroup;

  charsCount = 4;

  // choose between login and registration form
  loginVisibility: boolean = false;
  registerVisibility: boolean = true;
  toggleLogin() {
    this.loginVisibility = false;
    this.registerVisibility = true;
  }
  toggleRegister() {
    this.loginVisibility = true;
    this.registerVisibility = false;
  }
  constructor() { }

  ngOnInit() {
    this.userloginControl = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
      password: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
    });
    this.userRegisterControl = new FormGroup({
      email: new FormControl(),
      user: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log('Submitted!', this.userloginControl);
  }

  onRegister() {
    console.log('Registered!', this.userRegisterControl);
  }

  // Validators
  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        lengthError: true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            emailIsUsed: true
          });
        } else {
          resolve(null);
        }
       }, 3000);
    });
  }
}
