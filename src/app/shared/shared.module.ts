import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsCardComponent } from './details-card/details-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    CardsComponent,
    DetailsCardComponent
  ],
  exports: [
    HeaderComponent,
    CardsComponent,
    DetailsCardComponent
  ]
})
export class SharedModule { }
