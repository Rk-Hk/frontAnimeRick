import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';


const routes: Routes = [
  {path: 'listEpisodes', component: ListEpisodesComponent},
  {path: '', redirectTo: '/listEpisodes', pathMatch: 'full'},
  {path: 'episode/:id/:cap',component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
