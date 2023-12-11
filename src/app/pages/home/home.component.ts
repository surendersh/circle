import { Component, OnInit } from '@angular/core';
import { PropertiesSectionService } from 'src/app/services/properties-section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  agencyList:any;
  constructor(
    private agencyListService: PropertiesSectionService
  ) { }

  ngOnInit(): void {
    this.agencyList= this.agencyListService.getAgencyList();
  }

}
