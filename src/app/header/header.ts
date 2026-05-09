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
  navigation = ['Upcoming', 'Top Rated', 'Most Popular'];

  // Bootstrap classes
  sidebar = 
  {
    container: ['offcanvas', 'offcanvas-end', 'text-light'],
    header: ['offcanvas-header', 'border-bottom'],
    body: ['offcanvas-body'],
  };

  displayCategory(event: Event, nav: string): void
  {
    event.preventDefault();
    this.hideAllCategories();

    if (nav === 'Most Popular') 
    {
      this.displayPopular();
    }
    if (nav === 'Top Rated') 
    {
      this.displayRated();
    }
    if (nav === 'Upcoming') 
    {
      this.displayUpcoming();
    }
  }
  hideAllCategories(): void 
  {
    document.querySelectorAll('.popular-class, .rated-class, .upcoming-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'none';
    });
  }
  displayPopular(): void 
  {
    document.querySelectorAll('.popular-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }
  displayRated(): void 
  {
    document.querySelectorAll('.rated-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }
  displayUpcoming(): void 
  {
    document.querySelectorAll('.upcoming-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }
}

