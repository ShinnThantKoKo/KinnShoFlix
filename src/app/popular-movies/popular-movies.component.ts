import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {

  constructor (private service:MovieService) {

  }

  movies = this.service.popular_movies

}
