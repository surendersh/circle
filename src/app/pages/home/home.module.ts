import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PropertyDetailsContactComponent } from '../../components/property-details-contact/property-details-contact.component';
import { WhatWeProvideComponent } from '../../components/what-we-provide/what-we-provide.component';
import { TipsRentSellingComponent } from '../../components/tips-rent-selling/tips-rent-selling.component';
import { TrendingProjectsComponent } from '../../components/trending-projects/trending-projects.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HomeComponent, PropertyDetailsContactComponent, WhatWeProvideComponent, TipsRentSellingComponent, TrendingProjectsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
