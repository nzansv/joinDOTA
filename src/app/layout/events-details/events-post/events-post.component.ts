import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-post',
  templateUrl: './events-post.component.html',
  styleUrls: ['./events-post.component.css']
})
export class EventsPostComponent implements OnInit {

  @Input() id: any;
  @Input() eventsPost: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
