import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-result-tabke',
  templateUrl: './events-result-table.component.html',
  styleUrls: ['./events-result-table.component.css']
})
export class EventsResultTableComponent implements OnInit {

  @Input() eventsTitle: any;
  constructor() { }

  ngOnInit(): void {
  }

}
