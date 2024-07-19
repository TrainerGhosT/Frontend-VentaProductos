import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'HomeComponent',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
  })
  export default class HomeComponent {
    
  }
