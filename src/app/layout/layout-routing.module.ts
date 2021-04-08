import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlayComponent} from './play/play.component';
import {EventsComponent} from './events/events.component';
import {RankingComponent} from './ranking/ranking.component';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {AuthGuard} from '../auth/auth.guard';
import {LoginComponent} from '../auth/login/login.component';
import {ExitLoginGuard} from '../auth/login/exit-login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'play', component: PlayComponent},
  { path: 'login', component: LoginComponent, canDeactivate: [ExitLoginGuard]},
  { path: 'events', component: EventsComponent},
  { path: 'news-details/:id', component: NewsDetailsComponent},
  { path: 'ranking', component: RankingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers:    [ExitLoginGuard]
})
export class LayoutRoutingModule { }
