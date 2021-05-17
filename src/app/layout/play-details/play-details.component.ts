import { Component, OnInit } from '@angular/core';
import {SeasonsService} from '../../service/seasons.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.css']
})
export class PlayDetailsComponent implements OnInit {

  seasons: any = [];
  id: any;
  private sub: any;
  constructor(
    private seasonsService: SeasonsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getSeasons();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  getSeasons(): any{
    this.seasonsService.getSeasons().subscribe(result => {
      this.seasons = result;
      console.log(this.seasons);
    });
  }

  getNewsByID(id: any): void{
    const seasonsByIndex = this.seasons[id];
    return seasonsByIndex;
  }

}
