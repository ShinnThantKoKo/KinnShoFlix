import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'movies',
    component:AllmoviesComponent
  },
  {
    path:'popular',
    component:PopularMoviesComponent
  },
  {
    path:'nowplaying',
    component:NowPlayingMoviesComponent
  },
  {
    path:'toprated',
    component:TopRatedMoviesComponent
  },
  {
    path:'upcoming',
    component:UpcomingMoviesComponent
  },
  {
    path:'form',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
