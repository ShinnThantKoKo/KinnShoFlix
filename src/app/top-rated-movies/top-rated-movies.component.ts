import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent {

  constructor (private service:MovieService) {

  }
  movies = this.service.top_rated_movies

}
