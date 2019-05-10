import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../../services/cabinet.service';
import { UsersService } from '../../../services/users.service';
import { InterfaceUser } from '../../../shared/interfaces/users.interfaces';


@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  authorizedUser = {};
  userData = {};
  constructor(private cabinetUser: CabinetService,
              private usersService: UsersService) { }

  // public changeDataUser: InterfaceUser = {
  //   email: '',
  //   user: '',
  //   password: ''
  // };

  ngOnInit() {
    this.userData = JSON.parse(window.localStorage.getItem('userData'));
    this.cabinetUser.getUser()
    .subscribe(
      response => {this.authorizedUser = response,
        console.log(this.authorizedUser);
      },
      error => console.log(error)
    );
  }

    getUser() {
    this.cabinetUser.getUser()
    .subscribe(
      response => {this.authorizedUser = response,
        console.log(this.authorizedUser),

        this.userData = this.authorizedUser;
      },
      error => console.log(error)
    );
  }

}


