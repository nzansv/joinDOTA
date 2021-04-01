import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import {HomeComponent} from './home/home.component';
import {RankingComponent} from './ranking/ranking.component';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {PlayDetailsComponent} from './play-details/play-details.component';
import {PlayComponent} from './play/play.component';
import {TeamRankingComponent} from './ranking/team-ranking/team-ranking.component';
import {PlayerRankingComponent} from './ranking/player-ranking/player-ranking.component';
import {LastNewsComponent} from './home/last-news/last-news.component';
import {LastEventsComponent} from './home/last-events/last-events.component';
import {LastRankingComponent} from './home/last-ranking/last-ranking.component';
import {EventsComponent} from './events/events.component';
import {NewsPostComponent} from './news-details/news-post/news-post.component';

@NgModule({
  declarations: [
    HomeComponent,
    RankingComponent,
    NewsDetailsComponent,
    PlayDetailsComponent,
    PlayComponent,
    TeamRankingComponent,
    PlayerRankingComponent,
    LastNewsComponent,
    LastEventsComponent,
    LastRankingComponent,
    EventsComponent,
    NewsPostComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
  // dasdasdasd
})
export class LayoutModule { }
