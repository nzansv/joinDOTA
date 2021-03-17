import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news.service';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})

export class LastNewsComponent implements OnInit {
  news: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): any{
    this.newsService.getNews().subscribe(result => {
      this.news = result;
      console.log(this.news);
    });
  }

}

