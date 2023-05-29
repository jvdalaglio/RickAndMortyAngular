import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) {}

  navigateHome() {
    if(this.router.url != '/') {
      this.router.navigate([''])
    } else {
      location.reload()
    }
  }

}
