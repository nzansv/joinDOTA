import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {
  @Input() id: any;
  @Input() newsPost: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
