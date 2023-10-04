import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { ListComponent } from './list.component';
import { MLBPortalService } from '../../services/mlb-portal.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCheckboxModule,
        
        FormsModule,        

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