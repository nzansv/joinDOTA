import {Component, Input, OnInit} from '@angular/core';
import {SeasonsService} from '../../../service/seasons.service';

@Component({
  selector: 'app-play-post',
  templateUrl: './play-post.component.html',
  styleUrls: ['./play-post.component.css']
})
export class PlayPostComponent implements OnInit {

  @Input() id: any;
  @Input() playPost: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
