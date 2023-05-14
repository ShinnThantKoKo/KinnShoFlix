import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent {

  constructor (private service:MovieService) {

  }
  movies = this.service.now_playing_movies

}
