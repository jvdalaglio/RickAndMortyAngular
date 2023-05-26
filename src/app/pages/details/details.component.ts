import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public id: any;
  public character: any;
  page: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacterDetails();
  }

  getCharacterDetails() {
    this.id = this.route.snapshot.params['id']
    this.apiService.getById(this.id).subscribe({
      next: res => {
        this.character = res;
        if(this.character.type == "") {
          this.character.type = "unknown"
        }
      }
    })
  }
}
