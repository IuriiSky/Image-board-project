import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { InterfaceUser } from '../../shared/interfaces/users.interfaces';
import { CookieService } from '../../services/cookie.service';
import { Router } from '@angular/router';
import { AuthorizationGuard } from '../../guards/authorization.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message;
  previousUrl;

  constructor(private usersService: UsersService,
              private cookieService: CookieService,
              private router: Router,
              private authorizationGuard: AuthorizationGuard
              ) { }

  nameControl: FormControl;
  userloginControl: FormGroup;
  userRegisterControl: FormGroup;

  charsCount = 4;

  public createNewUser: InterfaceUser = {
    email: '',
    user: '',
    password: ''
  };

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

    if (this.authorizationGuard.redirectUrl) {
      this.message = 'Ви повинні бути зареєстровані для перегляду цієї сторінки';
      this.previousUrl = this.authorizationGuard.redirectUrl;
      this.authorizationGuard.redirectUrl = undefined;
    }
  }

  onSubmit() {
    console.log('Submitted!', this.userloginControl);
    this.usersService.onSubmit(this.createNewUser)
    .subscribe(
      response => {
        console.log(response),
        this.cookieService.set('token', response.token);
      },
      error => console.log(error)
      );
    this.createNewUser.email = '';
    this.createNewUser.password = '';
    setTimeout(() => {
      if (this.previousUrl) {
        this.router.navigate([this.previousUrl]);
      } else {
        this.router.navigate(['/me']);
      }
    }, 2000);
  }

  onRegister() {
    console.log('Registered!', this.userRegisterControl);
    this.usersService.onRegister(this.createNewUser)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
    this.createNewUser.email = '';
    this.createNewUser.user = '';
    this.createNewUser.password = '';
  }

  // Validators
  checkForLength(control: FormControl) {
    if (control.value.length < this.charsCount) {
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
