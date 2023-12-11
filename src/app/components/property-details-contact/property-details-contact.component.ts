import { Component, OnInit } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'app-property-details-contact',
  templateUrl: './property-details-contact.component.html',
  styleUrls: ['./property-details-contact.component.scss']
})
export class PropertyDetailsContactComponent implements OnInit {

  user = new User();
  constructor() { }

  
  ngOnInit(): void {
    this.user.name = 'Saikiran';
  }

  onSubmit() {
    console.log('form valid !')
  }

}
