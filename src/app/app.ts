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
export class App {
  appName = 'Movie Library';
  movies = [
    {
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi'
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action'
    },
    {
      title: 'Interstellar',
      year: 2014,
      genre: 'Adventure'
    }
  ];
}