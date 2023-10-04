import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';
import { GameCardModule } from '../../components/game-card/game-card.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule, GameCardModule, CommonModule]
})

export class ScheduleContentComponent {

  pitchesData: any 
  pitchers: any[] = []
  selectableGames: any[] = []

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    this.mlbPortalService.getPitchesData().subscribe(data => {
      this.pitchesData = data.queryResults.row;
  
      let games: any = {};
  
      this.pitchesData.forEach((item: any) => {
        const { game_pk, home_team_name, away_team_name, game_date, pitcher_id, pitcher_name } = item;
  
        if (!games[game_pk]) {
          games[game_pk] = {
            homeTeam: home_team_name,
            awayTeam: away_team_name,
            gameTime: game_date,
            pitchers: [],
          };
        }
  
        const existingPitcher = games[game_pk].pitchers.find((pitcher:any) => pitcher.pitcherId === pitcher_id);
  
        if (!existingPitcher) {
          games[game_pk].pitchers.push({
            pitcherId: pitcher_id,
            pitcherName: pitcher_name,
          });
        }
      });
  
      this.selectableGames = Object.values(games);
  
      this.selectableGames.forEach((game: any) => {
        game.homeTeamBG = this.mlbPortalService.setTeamBG(game.homeTeam);
        game.homeTeamLogo = this.mlbPortalService.setTeamLogo(game.homeTeam);
        game.awayTeamBG = this.mlbPortalService.setTeamBG(game.awayTeam);
        game.awayTeamLogo = this.mlbPortalService.setTeamLogo(game.awayTeam);
      });
    });
  }
  

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
