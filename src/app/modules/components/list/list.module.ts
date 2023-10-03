import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'

import { ListComponent } from './list.component';
import { MLBPortalService } from '../../services/mlb-portal.service';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        MatToolbarModule,

        CommonModule,
        RouterModule, 
    ],
    exports: [
        ListComponent
    ],
    providers: [
        MLBPortalService
    ]
})

export class ListModule{}