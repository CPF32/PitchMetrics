import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'

import { ToolbarComponent } from './toolbar.component';
import { MLBPortalService } from '../../services/mlb-portal.service';


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        MatToolbarModule,

        CommonModule,
        RouterModule, 
    ],
    exports: [
        ToolbarComponent
    ],
    providers: [
        MLBPortalService
    ]
})

export class ToolbarModule{}