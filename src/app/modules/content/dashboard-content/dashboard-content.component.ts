import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';
import { CommonModule } from '@angular/common';
import { GameCardModule } from '../../components/game-card/game-card.module';
import { ListModule } from '../../components/list/list.module';
import { VisualizerModule } from '../../components/visualizer/visualizer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule, GameCardModule, ListModule, VisualizerModule, CommonModule, MatIconModule, MatButtonModule]
})

export class DashboardContentComponent {
  
  mobile: boolean = false
  open: boolean = true
  listWidth: string ='350px'

  gameData: any[] = []
  pitchers: any [] = []

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 699;

    this.mlbPortalService.getPitchesData().subscribe(data => {
      const gameDate = sessionStorage.getItem('gameDate');

      this.gameData = data.queryResults.row.filter((row: any) => row.game_date === gameDate);
      
      this.gameData.forEach((row: any) => {
        const existingPitcher = this.pitchers.find(pitcher => pitcher.pitcherId === row.pitcher_id);

        if (!existingPitcher) {
          const newPitcher = {
            pitcherId: row.pitcher_id,
            pitcherName: row.pitcher_name,
            pitches: [],
            uniquePitchTypes: []
          };

          this.pitchers.push(newPitcher);
        }

        const existingPitcherIndex = this.pitchers.findIndex(pitcher => pitcher.pitcherId === row.pitcher_id);

        const pitchInfo = {
          pitch_number: row.event_pitch_number,
          pitch_name: row.pitch_name,
          init_accel_x: row.init_accel_x,
          init_accel_y: row.init_accel_y,
          init_accel_z: row.init_accel_z,
          init_pos_x: row.init_pos_x,
          init_pos_y: row.init_pos_y,
          init_pos_z: row.init_pos_z,
          init_vel_x: row.init_vel_x,
          init_vel_y: row.init_vel_y,
          init_vel_z: row.init_vel_z,
          initial_speed: row.initial_speed,
          plate_speed: row.plate_speed,
          plate_x: row.plate_x,
          plate_y: row.plate_y,
          plate_z: row.plate_z,
          sv_pitch_id: row.sv_pitch_id,
          sz_bottom: row.sz_bottom,
          sz_top: row.sz_top,
        };

        this.pitchers[existingPitcherIndex].pitches.push(pitchInfo);

        if (!this.pitchers[existingPitcherIndex].uniquePitchTypes.includes(row.pitch_name)) {
          this.pitchers[existingPitcherIndex].uniquePitchTypes.push(row.pitch_name);
        }
      });

      this.mlbPortalService.setPitchersData(this.pitchers);

    })
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }

  toggleList(){
    this.open = !this.open
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = window.innerWidth <= 699;
  }
}
