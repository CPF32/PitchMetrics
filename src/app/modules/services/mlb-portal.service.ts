import { Injectable } from '@angular/core';


@Injectable()
export class MLBPortalService {
    
    constructor(){}

    leaveToMLB(){
        window.location.href = 'https://www.mlb.com/astros';
    }

}