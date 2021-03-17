import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlayComponent} from './play/play.component';
import {EventsComponent} from './events/events.component';
import {RankingComponent} from './ranking/ranking.component';
import {NewsDetailsComponent} from './news-details/news-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'play', component: PlayComponent},
  { path: 'events', component: EventsComponent},
  { path: 'news-details/:id', component: NewsDetailsComponent},
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
