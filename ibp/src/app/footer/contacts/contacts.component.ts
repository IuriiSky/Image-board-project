import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  formShow: boolean = false;
  answerShow: boolean = true;

  toggleShow() {
    this.formShow = true;
    this.answerShow = false;
  }
  
  fullContactsControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.fullContactsControl = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)])
      
    });

    this.fullContactsControl.valueChanges.subscribe((value) => console.log(value));
    this.fullContactsControl.statusChanges.subscribe((status) => console.log(status));
  }

}
