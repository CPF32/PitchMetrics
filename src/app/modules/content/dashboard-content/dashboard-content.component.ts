import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';
import { CommonModule } from '@angular/common';
import { GameCardModule } from '../../components/game-card/game-card.module';
import { ListModule } from '../../components/list/list.module';
import { VisualizerModule } from '../../components/visualizer/visualizer.module';


@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule, GameCardModule, ListModule, VisualizerModule, CommonModule]
})

export class DashboardContentComponent {

  gameData: any[] = []

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    this.mlbPortalService.getPitchesData().subscribe(data => {
      const gameDate = sessionStorage.getItem('gameDate');

      this.gameData = data.queryResults.row.filter((row: any) => row.game_date === gameDate);
      console.log(this.gameData);
    })
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
