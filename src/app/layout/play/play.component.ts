import { Component, OnInit } from '@angular/core';
import {SeasonsService} from '../../service/seasons.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  seasons: any = [];

  constructor(private seasonsService: SeasonsService) { }

  ngOnInit(): void {
    this.getSeasons();
  }

  getSeasons(): any{
    this.seasonsService.getSeasons().subscribe(result => {
      this.seasons = result;
      console.log(this.seasons);
    });
  }

}
