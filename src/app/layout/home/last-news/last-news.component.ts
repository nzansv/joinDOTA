import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})

export class LastNewsComponent implements OnInit {

  news: any[] = [
    {
      date: new Date(2021, 5, 1),
      img: 'https://cdn0.gamesports.net/content_teasers/101000/101618.jpg?1614943813',
      title: 'Valve stops development of Dota 2 card game Artifact',
      text: 'After a disastrous development of their player count, Valve have reevaluated the game\'s economy and decided to stop further development. Both Artifact versions and all cards are now available for free.'
    },
    {
      date: new Date(2021, 4, 28),
      img: 'https://cdn0.gamesports.net/content_teasers/101000/101562.jpg?1614770989',
      title: '23savage reaches 12k MMR as first player in the world',
      text: 'Thai pro player Nuengnara \'23savage\' Teeramahanon now has around six times the MMR of the average Dota player.'
    },
    {
      date: new Date(2021, 4, 23),
      img: 'https://cdn0.gamesports.net/content_teasers/101000/101536.jpg?1614681416',
      title: 'New Dragons Blood trailer revealed and now it\'s ok',
      text: 'The new Dragon\'s Blood trailer provides more insight into the upcoming anime series that will soon be available on Netflix. Not only is the goddess of the moon Salemene starting a war, Invoker teases some serious lies – and suddenly, Terrorblade is involved?'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

