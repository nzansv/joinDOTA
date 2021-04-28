import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';
import {EventsService} from '../../service/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  events: any = [];
  id: any;
  eventsByIndex: any;
  private sub: any;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getEvents();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  getEvents(): any{
    this.eventsService.getEvents().subscribe(result => {
      this.events = result;
      console.log(this.events);
    });
  }

  getNewsByID(id: any): void{
    const eventsByIndex = this.events[id];
    return eventsByIndex;
  }

}
