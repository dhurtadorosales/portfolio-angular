import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPageInterface } from '../interfaces/info-page.interface';

@Injectable()

export class InfoPageService {

    info: InfoPageInterface = {};
    charged = false;
    team: any[] = [];

    constructor(private _http: HttpClient) {
        this.getInfo();
        this.getTeam();
    }

    private getInfo() {
        this._http.get('assets/data/data.json')
            .subscribe((response: InfoPageInterface) => {
                this.charged = true;
                this.info = response;
            });
    }

    private getTeam() {
        this._http.get('https://angular-portfolio-197d3.firebaseio.com/team.json')
            .subscribe((response: any) => {
                this.team = response;
            });
    }
}
