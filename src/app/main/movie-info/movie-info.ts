import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-movie-info',
  imports: [],
  templateUrl: './movie-info.html',
  styleUrl: './movie-info.css',
})
export class MovieInfo 
{
  @Input() movie: any;
  @Output() close = new EventEmitter<void>();

  closeMovieInfo() 
  {
    this.close.emit();
  }
}
