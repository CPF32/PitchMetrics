import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule]
})

export class ScheduleContentComponent {

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    // may want to do something here
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
