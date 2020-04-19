import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private urlJikanService:string = 'https://api.jikan.moe/v3'
  private typeMovie:string = 'anime';
  private codeMovie:string = '1735/'

  constructor( private _httpClient: HttpClient) { }


  getEpisodiesBySerie(idSerie : string , numPage: number): Observable<any>{
    this.codeMovie = idSerie? idSerie:this.codeMovie;
    let urlFinal = `${this.urlJikanService}/${this.typeMovie}/${this.codeMovie}/episodes/${numPage}`
    console.log("URL : ", urlFinal);
    
    return this._httpClient.get(urlFinal);
  }
}
