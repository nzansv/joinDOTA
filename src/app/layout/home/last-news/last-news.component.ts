import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news.service';
import {RestApiService} from '../../../service/rest-api.service';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})

export class LastNewsComponent implements OnInit {
  news: any = [];

  News: any = [];

  constructor(private newsService: NewsService, public restApi: RestApiService) { }

  ngOnInit(): void {
    this.getNews();
    this.loadNews();
  }

  loadNews(): any {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.News = data;
    });
  }

  getNews(): any{
    this.newsService.getNews().subscribe(result => {
      this.news = result;
      console.log(this.news);
    });
  }

}

