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
  prevPitcher: string = ''
  selectableGames: any[] = []

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    this.mlbPortalService.getPitchesData().subscribe(data => {
      this.pitchesData = data.queryResults.row;

      let games: any= {}

      this.pitchesData.forEach((item: any) => {
        const { game_pk, home_team_name, away_team_name, game_date, pitcher_name } = item;

        
        if (!games[game_pk]) {
          games[game_pk] = {
            homeTeam: home_team_name,
            awayTeam: away_team_name,
            gameTime: game_date,
            pitchers: [],

          };
        }
        
        if (this.prevPitcher !== pitcher_name) {
          games[game_pk].pitchers.push(pitcher_name);
          this.prevPitcher = pitcher_name;
        }
      });

      this.selectableGames = Object.values(games);

      this.selectableGames.forEach((game: any) => {
        game.homeTeamBG = this.mlbPortalService.setTeamBG(game.homeTeam);
        game.homeTeamLogo = this.mlbPortalService.setTeamLogo(game.homeTeam);
        game.awayTeamBG = this.mlbPortalService.setTeamBG(game.awayTeam);
        game.awayTeamLogo =this.mlbPortalService.setTeamLogo(game.awayTeam);
      });

      console.log(this.selectableGames)
    });
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
