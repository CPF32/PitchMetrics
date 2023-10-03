import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MLBPortalService } from '../../services/mlb-portal.service';


@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class GameCardComponent implements OnInit {

  @Input() gameData!: any

  dayMonthYear: string = ''

  constructor(private router: Router, private mlbPortalService: MLBPortalService) { }

  ngOnInit() {
    this.dayMonthYear = this.mlbPortalService.getGameDateReadable(this.gameData.gameTime)
  }

  flip: string = 'inactive';

  toggleFlip(event: Event) {
    event.stopPropagation();
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  toDashboard(data: any) {
    sessionStorage.setItem('homeTeam', data.homeTeam)
    sessionStorage.setItem('awayTeam', data.awayTeam)
    sessionStorage.setItem('gameDate', data.gameTime)

    this.router.navigate(['/dashboard'])
  }

}