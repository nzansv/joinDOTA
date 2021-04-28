import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../service/events.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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
