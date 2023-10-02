import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.css'],
  standalone: true,
  imports: [ToolbarModule]
})

export class ScheduleContentComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
    // may want to do something here
  }
}
