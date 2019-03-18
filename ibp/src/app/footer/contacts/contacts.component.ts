import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],


})

export class ContactsComponent implements OnInit {

  fullContactsControl: FormGroup;
  

  constructor() { 
      }

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