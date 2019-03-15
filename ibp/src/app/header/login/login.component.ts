import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameControl: FormControl;
  userloginControl: FormGroup;
  userRegisterControl: FormGroup;

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
      email: new FormControl(),
      password: new FormControl()
    });
    this.userRegisterControl = new FormGroup({
      email: new FormControl(),
      user: new FormControl(),
      password: new FormControl()
    })
  }

}
