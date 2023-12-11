import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-projects',
  templateUrl: './trending-projects.component.html',
  styleUrls: ['./trending-projects.component.scss']
})
export class TrendingProjectsComponent implements OnInit {

  @Input() agencyList:any;
  constructor() { }

  ngOnInit(): void {
  }

}
