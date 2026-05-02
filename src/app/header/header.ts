import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header 
{
  // array of navbar elements
  navigation = ['Top Rated', 'Most Popular', 'Most Watched'];

  // Bootstrap classes
  sidebar = 
  {
    container: ['offcanvas', 'offcanvas-end', 'bg-dark', 'text-light'],
    header: ['offcanvas-header', 'border-bottom'],
    body: ['offcanvas-body'],
  };
}

