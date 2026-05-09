import { Component } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App 
{
  appName = 'Movie Library';
  // samples
  movies = 
  [
    {title: 'Inception', year: 2010, genre: 'Sci-Fi'},
    {title: 'The Dark Knight', year: 2008, genre: 'Action'},
    {title: 'Interstellar', year: 2014, genre: 'Adventure'},
  ];
  // IMDB most popular movies - 2026
  popular =
  [
    {title: 'Green Book', year: 2018, rating: 8.2, age: '12A'},
    {title: 'Dracula: A Love Tale', year: 2025, rating: 6.2, age: 15},
    {title: 'The Super Mario Galaxy Movie', year: 2026, rating: 6.4, age: 'PG'},
    {title: 'Anaconda', year: 2025, rating: 5.5, age: 15},
    {title: 'Zootropolis 2', year: 2025, rating: 7.4, age: 'PG'},
    {title: 'Toy Story 5', year: 2026, rating: 'TBC', age: 'N/A'},
    {title: 'The Sheep Detectives', year: 2026, rating: 7.6, age: 'PG'},
    {title: 'Avatar: Fire and Ash', year: 2025, rating: 7.3, age: '12A'},
    {title: 'The Dark Knight', year: 2008, rating: 9.1, age: '12A'},
    {title: 'Scream 7', year: 2026, rating: 5.5, age: 18},
    {title: 'Dust Bunny', year: 2025, rating: 6.5, age: '12A'},
    {title: 'Frankenstein', year: 2025, rating: 7.4, age: 15},
    {title: 'Shelter', year: 2026, rating: 5.5, age: 15},
  ];
}