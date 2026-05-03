import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer 
{
  links = ["https://angular.dev", "https://getbootstrap.com"];
  year = new Date().getFullYear();
}


