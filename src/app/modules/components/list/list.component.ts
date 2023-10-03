import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
})

export class ListComponent implements OnInit {

  constructor(private router: Router, private mlbPortalService: MLBPortalService){}

  ngOnInit(): void {
    
  }

}