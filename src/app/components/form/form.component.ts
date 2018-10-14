import {Component, OnInit} from '@angular/core';
import {SimpleContact} from '../../models/SimpleContact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact: SimpleContact;
  constructor() {
  }

  ngOnInit() {
    this.contact = new SimpleContact();
  }

  public submit(){
    alert('Contact \n' + JSON.stringify(this.contact));
  }

}
