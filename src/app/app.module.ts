import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EpisodeComponent } from './components/episode/episode.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { SafeurlPipe } from './pipes/safeurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EpisodeComponent,
    ListEpisodesComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
