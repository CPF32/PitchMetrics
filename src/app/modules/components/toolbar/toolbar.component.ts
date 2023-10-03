import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
})

export class ToolbarComponent implements OnInit {

  homeTeam: string | null = ''
  awayTeam: string | null = ''
  gameDate: string | null = ''
  selectedGame: boolean = false

  cleanDate: string = ''

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    this.homeTeam = sessionStorage.getItem('homeTeam')
    this.awayTeam = sessionStorage.getItem('awayTeam')
    this.gameDate = sessionStorage.getItem('gameDate')

    if (this.gameDate){
      this.selectedGame = true
      this.cleanDate = this.mlbPortalService.getGameDateReadable(this.gameDate)
    }
  }

  backToSchedule(){
    sessionStorage.clear()
    this.router.navigate(['/schedule'])
  }
}