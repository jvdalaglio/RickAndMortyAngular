import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
  standalone: true,
  imports: [MatCardModule]
})
export class DetailsCardComponent {
  @Input() character: any;

  constructor() {}

}
