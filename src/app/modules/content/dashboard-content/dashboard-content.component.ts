import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { MLBPortalService } from '../../services/mlb-portal.service';


@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  standalone: true,
  providers: [MLBPortalService],
  imports: [ToolbarModule]
})

export class DashboardContentComponent {
  
  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    // may want to do something here
  }

  mlbExit(){
    this.mlbPortalService.leaveToMLB()
  }
}
