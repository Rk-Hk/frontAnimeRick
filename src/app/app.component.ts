import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { chapterEmmiter } from './interfaces/generic.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AnimeRick';
  actualCapitulo : string = '1';
  defaultPage : number = 1;
  episodes:Array<any>;
  animeCode: string='1735';

  constructor(  
    private _moviesService:MoviesService,
    private _router:Router
    ){}

  ngOnInit(){
    this.episodes = JSON.parse(localStorage.getItem('capitulos'))
    if(!this.episodes || parseInt(this.actualCapitulo)>this.episodes.length){
      this.defaultPage = !this.episodes ? 1 : Math.floor(this.episodes.length/100)
      this._moviesService.getEpisodiesBySerie(this.animeCode, this.defaultPage).subscribe(
        (response) => {
          console.log(response)
          this.addEpisodes(response.episodes);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  addEpisodes(episodes:Array<any>){
    this.episodes = this.episodes==null? episodes : this.episodes.concat(episodes)
    localStorage.setItem('capitulos', JSON.stringify(this.episodes));
  }
}
