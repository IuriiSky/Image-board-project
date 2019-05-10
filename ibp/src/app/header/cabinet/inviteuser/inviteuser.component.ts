import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-inviteuser',
  templateUrl: './inviteuser.component.html',
  styleUrls: ['./inviteuser.component.scss']
})
export class InviteuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitInvite(formInvite: NgForm) {
    console.log('Запрошення відправлено!', formInvite);
  }
}
