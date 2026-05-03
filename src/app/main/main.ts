import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main 
{
  // hide API key
  private readonly api_key = '72919e48c93cb8d0cae0700a046ed917';

  fetchRated = async() => // top rated
  {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}`) // send HTTP request
    const data = await response.json(); // read response and convert into usable data
    return data; // return final parsed data
  }
  fetchPopular = async() => // most popular
  {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}`);
    const data = await response.json();
    return data;
  }
  fetchUpcoming = async() => // upcoming
  {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}`);
    const data = await response.json();
    return data;
  }

  async ngOnInit()
  {
    // safely call API functions and wait for returned data
    const rated = await this.fetchRated(); 
    const popular = await this.fetchPopular();
    const upcoming = await this.fetchUpcoming();

    console.log(rated);
    console.log(popular);
    console.log(upcoming);
  }
}

/*

URLS:
https://www.themoviedb.org/movie/ - base URL for id
https://image.tmdb.org/t/p/w500/ - base URL for poster path

*/
