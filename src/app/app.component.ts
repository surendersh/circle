import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-1';
  click(){
    alert(" We learn so many things from you & phani garu.....you are inspiration to us....Thanks for everything!!....")
  }
  properties = [
    {
      imageUrl: 'assets/anuhar.png',
      details: 'Property details 1',
      price: 1000000
    },
    {
      imageUrl: 'path_to_image_2',
      details: 'Property details 2',
      price: 1500000
    },
    // Add more property objects as needed
  ];
}
