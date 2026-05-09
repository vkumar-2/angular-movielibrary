import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { MovieInfo } from './movie-info/movie-info';
import { api_key } from './api/api_key';

interface Movie 
{
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;

  // array sub-properties
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieResponse 
{
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

@Component({
  selector: 'app-main',
  imports: [CommonModule, MovieInfo],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit, OnDestroy
{
  isMovieInfoOpen = false;
  movie: any;
  
  openMovieInfo(movie: any) 
  {
    this.movie = movie;
    this.isMovieInfoOpen = true;
    document.body.style.overflow = 'hidden';
  }
  closeMovieInfo() 
  {
    this.isMovieInfoOpen = false;
    document.body.style.overflow = 'auto';
  }

  constructor
  (
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  isLargeScreen = false;
  private breakpointSubscription?: Subscription;

  // API key saved in external file
  api = api_key;

  // base URLs
  url = 'https://www.themoviedb.org/movie/';
  img_url = 'https://image.tmdb.org/t/p/w500/';

  getMovieImage(movie: Movie): string 
  {
    const imagePath = this.isLargeScreen ? movie.poster_path : movie.backdrop_path;
    return this.img_url + imagePath;
  }

  // arrays to hold movies
  rated: Movie[] = [];
  popular: Movie[] = [];
  upcoming: Movie[] = [];

  // base function - resolve promise by category
  async fetchMovies(category: string): Promise<MovieResponse>
  {
    // send HTTP request
    const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${this.api}`);

    if (!response.ok)
    {
      throw new Error(`Failed to fetch ${category} movies`);
    }
    else
    {
      // parse data into reusable JS
      return response.json();
    }
  }
  async fetchRated(): Promise<MovieResponse> 
  {
    // top rated
    return this.fetchMovies('top_rated');
  }
  async fetchPopular(): Promise<MovieResponse> 
  {
    // most popular
    return this.fetchMovies('popular');
  }
  async fetchUpcoming(): Promise<MovieResponse> 
  {
    // upcoming
    return this.fetchMovies('upcoming');
  }
  async ngOnInit(): Promise<void>
  {
    this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .subscribe(result => {
      this.isLargeScreen = result.matches;
      this.cdr.detectChanges();
    });

    const rated = await this.fetchRated();
    const popular = await this.fetchPopular();
    const upcoming = await this.fetchUpcoming();

    this.rated = rated.results;
    this.popular = popular.results;
    this.upcoming = upcoming.results;

    this.cdr.detectChanges();
  }
  ngOnDestroy(): void 
  {
    this.breakpointSubscription?.unsubscribe();
  }

  // hide all categories
  hideAllCategories(): void 
  {
    document.querySelectorAll('.popular-class, .rated-class, .upcoming-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'none';
    });
  }

  // render popular movies
  displayPopular(): void 
  {
    this.hideAllCategories();
    document.querySelectorAll('.popular-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }

  // render rated movies
  displayRated(): void 
  {
    this.hideAllCategories();
    document.querySelectorAll('.rated-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }

  // render upcoming movies
  displayUpcoming(): void 
  {
    this.hideAllCategories();
    document.querySelectorAll('.upcoming-class').forEach((element) => 
    {
      (element as HTMLElement).style.display = 'block';
    });
  }
}