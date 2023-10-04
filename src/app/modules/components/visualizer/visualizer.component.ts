import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Layout, PlotData } from 'plotly.js';
import { MLBPortalService } from '../../services/mlb-portal.service';

@Component({
  selector: 'visualizer',
  templateUrl: 'visualizer.component.html',
  styleUrls: ['visualizer.component.css'],
})

export class VisualizerComponent implements OnInit {

    plotData: PlotData[] = [];
    graphIncomingData: any
    layout: any

    constructor(private router: Router, private mlbPortalService: MLBPortalService){}

    ngOnInit(): void {

        this.mlbPortalService.graphData$.subscribe((pitch:any) => {
            this.graphIncomingData = pitch
            
            const data = this.graphIncomingData;
    
            const movementPlot:any = {
                x: data.map((item: any) => (item.init_pos_x)),
                y: data.map((item: any) => (item.init_pos_z)),
                mode: 'markers',
                type: 'scatter',
                showlegend: false,
                hoverinfo: 'text',
                marker: {
                    color: data.map((item: any) => {
                        //COOLORS :)
                        switch (item.pitch_name) {
                            case 'Four-seam FB':
                                return '#1C3149';
                            case 'Two-seam FB':
                                return '#76808C'; 
                            case 'Cutter':
                                return '#CFCFCF';
                            case 'Slider':
                                return '#818181';
                            case 'Curveball':
                                return '#323232';
                            case 'Changeup':
                                return '#F48818';
                            case 'Sinker':
                                return '#F07B18';
                            case 'Splitter':
                                return '#EC6E18';
                            default:
                                return 'gray'; 
                        }
                    }),
                    size: 8,
                },
                text: data.map((item: any) => {
                    const formattedPlateSpeed = parseFloat(item.plate_speed).toFixed(2);
                    
                    return ` Pitch Number: ${item.number} <br> Pitch Type: ${item.pitch_name} <br> Plate Velocity: ${formattedPlateSpeed} mph `;
                }),
            };
    
            this.layout = {
                xaxis: {
                    range: [ -4, 4 ]
                },
                yaxis: {
                    range: [0, 8]
                },
                title: {
                    text: 'RELEASE (FT)',
                    font: {
                      size: 24, 
                      color: '#ec6e18'
                    },
                  },
              };
    
            this.plotData = [movementPlot];
        })
    }
}