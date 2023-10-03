import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'

import { VisualizerComponent } from './visualizer.component';
import { MLBPortalService } from '../../services/mlb-portal.service';


@NgModule({
    declarations: [
        VisualizerComponent
    ],
    imports: [
        MatToolbarModule,

        CommonModule,
        RouterModule, 
    ],
    exports: [
        VisualizerComponent
    ],
    providers: [
        MLBPortalService
    ]
})

export class VisualizerModule{}