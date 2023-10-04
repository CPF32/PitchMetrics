import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {

    pitchers: any[] = []
    pitcherChoice: any
    pitchType: any
    uniquePitchTypes: any[] = [];
    pitcherData: any = []
    listView: any = []
    filteredListView: any[] = []
    
    displayedColumns: string[] = ['select', 'pitchNumber', 'pitchName', 'velocity'];
    dataSource = new MatTableDataSource<any>();

    constructor(private router: Router, private mlbPortalService: MLBPortalService){}

    ngOnInit(): void {
        this.pitcherChoice = sessionStorage.getItem('pitcher');
        
        this.mlbPortalService.pitchersData$.subscribe((data:any) => {
            this.pitchers = data;

            this.updateUniquePitchTypes()
        });
    }

    updateUniquePitchTypes(){
        sessionStorage.setItem('pitcher', this.pitcherChoice)
        this.pitcherData = this.pitchers.find(pitcher => pitcher.pitcherName === this.pitcherChoice);
        if (this.pitcherData) {
            
            this.uniquePitchTypes = [...new Set(this.pitcherData.pitches.map((pitch:any) => pitch.pitch_name))];

            this.listView = this.pitcherData.pitches.map((pitch: any) => {
                return {
                  ...pitch,
                  selected: false 
                };
            });

            this.pitchType = ''

            this.filteredListView.forEach((pitch:any) => {
                pitch.selected = false;
            });
            
            this.filterListView()

            this.dataSource = new MatTableDataSource<any>(this.filteredListView);
        }
    }

    filterListView(){
        if (this.pitchType) {
            this.filteredListView = this.listView.filter((pitch: any) => pitch.pitch_name === this.pitchType);
        }
        else {
            this.filteredListView = [...this.listView];
        }
        console.log(this.filteredListView)
        this.dataSource = new MatTableDataSource<any>(this.filteredListView);
    }

    togglePitchSelection(pitch: any) {
        pitch.selected = !pitch.selected;
    }
      
    selectAllPitches(event: any) {
        const isChecked = event.checked;
        
        this.filteredListView.forEach((pitch:any) => {
            pitch.selected = isChecked;
        });
    }

}