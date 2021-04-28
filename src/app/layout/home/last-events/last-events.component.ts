import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news.service';
import {EventsService} from '../../../service/events.service';

@Component({
  selector: 'app-last-events',
  templateUrl: './last-events.component.html',
  styleUrls: ['./last-events.component.css']
})
export class LastEventsComponent implements OnInit {

  events: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): any{
    this.eventsService.getEvents().subscribe(result => {
      this.events = result;
      console.log(this.events);
    });
  }

}
