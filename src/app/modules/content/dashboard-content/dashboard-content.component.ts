import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';


@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  standalone: true,
  imports: [ToolbarModule]
})

export class DashboardContentComponent {
  
  constructor(private router: Router){}

  ngOnInit(): void {
    // may want to do something here
  }
}
