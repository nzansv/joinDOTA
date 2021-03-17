import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {NewsPostComponent} from './news-post/news-post.component';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: any = [];
  id: any;
  newsByIndex: any;
  private sub: any;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
) {
  }

  ngOnInit(): void {
    this.getNews();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  getNews(): any{
    this.newsService.getNews().subscribe(result => {
      this.news = result;
      console.log(this.news);
    });
  }

  getNewsByID(id: any): void{
    const newsByIndex = this.news[id];
    return newsByIndex;
  }


}
