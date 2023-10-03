import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { GameCardComponent } from './game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MLBPortalService } from '../../services/mlb-portal.service';


@NgModule({
    declarations: [
        GameCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule, 
        HttpClientModule,

        MatIconModule,
        MatButtonModule
    ],
    exports: [
        GameCardComponent
    ],
    providers: [
        MLBPortalService
    ]
})

export class GameCardModule{}