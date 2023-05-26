import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
