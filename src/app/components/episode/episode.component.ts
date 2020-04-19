import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  private actualChapter: string;
  private animeCod: string;
  private urlResult: string = 'https://www.zonarutoppuden.com/stream2.php?id=/ns-sub/';

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _router:Router
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = ()=>{return false};
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.actualChapter = params["cap"];
      this.animeCod = params["id"];
      this.urlResult=this.urlResult+this.actualChapter

      console.log("actualChapter:" , this.actualChapter, " - URLRESULT", this.urlResult);
    });
  }

}
