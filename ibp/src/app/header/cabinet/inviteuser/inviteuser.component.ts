import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CabinetService } from '../../../services/cabinet.service';

@Component({
  selector: 'app-inviteuser',
  templateUrl: './inviteuser.component.html',
  styleUrls: ['./inviteuser.component.scss']
})
export class InviteuserComponent implements OnInit {

  formInvite = {};
  constructor(private inviteUser: CabinetService) { }
  tockenInvite: string;
  ngOnInit() {
  }

  submitInvite() {
    console.log('Запрошення відправлено!', this.formInvite);
    this.inviteUser.submitInvite(this.formInvite)
    .subscribe(
      response => {
        console.log(response),
        this.tockenInvite = response.tocken;
      }, error => console.log(error)
    );
  }
}
