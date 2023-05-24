import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class CardsComponent {
  constructor(
    public apiService: ApiService
  ){}

  public characters: any;
  public page: number = 1

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter() {
    this.apiService.getAllCharacters(this.page).subscribe({
      next: res => this.characters = res.results
    })
  }

  nextPage() {
    this.page++
    this.getCharacter()
  }

  previousPage() {
    if (this.page > 1) {
      this.page--
      this.getCharacter()
    }
  }
}
