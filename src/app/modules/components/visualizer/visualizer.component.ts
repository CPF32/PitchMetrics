import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'visualizer',
  templateUrl: 'visualizer.component.html',
  styleUrls: ['visualizer.component.css'],
})

export class VisualizerComponent implements OnInit {

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    
  }

}