import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class MLBPortalService {
    pitchesUrl: string = environment.gameDataURL

    constructor(private http: HttpClient) {}

    getPitchesData(): Observable<any> {
        return this.http.get(this.pitchesUrl);
    }

    leaveToMLB() {
        window.location.href = 'https://www.mlb.com/astros';
    }

    setTeamBG(team: string){
        // WOULD DO THIS FOR ALL TEAMS
        if (team === 'Houston Astros'){
            return '#EB6E1F'
        }
        else if (team === 'Tampa Bay Rays') {
            return '#499fe0'
        }
        else if (team === 'Texas Rangers') {
            return '#043278'
        }
        else if (team === 'New York Yankees'){
            return '#1e2740'
        }
        else return '#000'

    }
    setTeamLogo(team: string){
        // WOULD DO THIS FOR ALL TEAMS
        if (team === 'Houston Astros'){
            return '../../../assets/images/good-guys/astros_logo.png'
        }
        else if (team === 'Tampa Bay Rays') {
            return '../../../assets/images/bad-guys/rays_logo.png'
        }
        else if (team === 'Texas Rangers') {
            return '../../../assets/images/bad-guys/rangers_logo.png'
        }
        else if (team === 'New York Yankees'){
            return '../../../assets/images/bad-guys/yankees_logo.png'
        }
        else return
    }
}
