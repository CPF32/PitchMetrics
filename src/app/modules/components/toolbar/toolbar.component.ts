import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
})

export class ToolbarComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    // may want to do something here
  }

  backToSchedule(){
    this.router.navigate(['/schedule'])
  }
}