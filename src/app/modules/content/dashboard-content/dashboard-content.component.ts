import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';
import { CommonModule } from '@angular/common';
import { GameCardModule } from '../../components/game-card/game-card.module';


@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule, GameCardModule, CommonModule]
})

export class DashboardContentComponent {

  gameData: string = ''

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    // may want to do something here
    let preParsedData = sessionStorage.getItem('gameData')
    
    if (preParsedData !== null) {
      this.gameData = JSON.parse(preParsedData);
    }
    else {
      alert('Pitch Metrics failed to fetch game data. Try Again!')
    }
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
