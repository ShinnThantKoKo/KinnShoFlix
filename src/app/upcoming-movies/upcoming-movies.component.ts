import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent {

  constructor (private service:MovieService) {

  }
  movies = this.service.upcoming_movies

}
