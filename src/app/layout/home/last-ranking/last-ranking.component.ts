import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-ranking',
  templateUrl: './last-ranking.component.html',
  styleUrls: ['./last-ranking.component.css']
})
export class LastRankingComponent implements OnInit {

  teams: any[] = [
    {
      rank: '1',
      name: 'Team Secret',
      prizePool: '34,456,345',
      record: '(69%)'
      },
    {
      rank: '2',
      name: 'Virtus.pro',
      prizePool: '9,963,570',
      record: '(68%)'
    },
    {
      rank: '3',
      name: 'PSG.LGD',
      prizePool: '234,563',
      record: '(65%)'
    },
    {
      rank: '4',
      name: 'Elephant',
      prizePool: '60,450',
      record: '(54%)'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
