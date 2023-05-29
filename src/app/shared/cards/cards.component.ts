import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatSelectModule, MatFormFieldModule,
    FormsModule, MatInputModule, ReactiveFormsModule
  ]
})
export class CardsComponent {
  constructor(
    public apiService: ApiService,
    private router: Router
  ){}

  public characters: any;
  public page: number = 1;
  public locations: any ;
  public selectedStatus: any;
  public location: any;
  public selectedSpecies: any;
  public status: any[] = ['Alive' ,'Dead' , 'Unknown']
  public species = ['Alien','Animal','Cronenberg', 'Disease', 'Human', 'Humanoid', 'Mythological Creature' ,'Poopybutthole' ,'Robot' , 'Unknown']
  public isFilter: boolean = true;

  ngOnInit(): void {
    this.getCharacter();
    this.getLocations();
  }

  getCharacter() {
    this.apiService.getAllCharacters(this.page).subscribe({
      next: res => this.characters = res.results
    })
  }

  nextPage(name: string) {
    this.page++
    if(name != "" || this.selectedStatus != undefined || this.selectedSpecies != undefined) {
      this.filterCharacters(name)
    } else {
      this.getCharacter()
    }
  }

  previousPage(name: string) {
    if (this.page > 1) {
      this.page--
      if(name != "" || this.selectedStatus != undefined || this.selectedSpecies != undefined) {
        this.filterCharacters(name)
      } else {
        this.getCharacter()
      }
    }
  }

  getDetails(id: number) {
    this.router.navigate([`/details/${id}`])
  }

  getLocations() {
    this.apiService.getLocation().subscribe({
      next: res => {
        this.locations = res.results
      }
    })
  }

  filterCharacters(name: string, filter?: boolean) {
    if(filter) {
      this.page = 1
    }
    this.apiService.filterCharacters(name, this.selectedStatus, this.selectedSpecies, this.page)
    .subscribe({
      next: (data :any ) => {
        this.characters = data.results;
        console.log(this.characters)
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
