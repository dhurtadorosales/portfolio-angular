import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        public _info: InfoPageService,
        private _router: Router
    ) {
    }

    ngOnInit() {
    }

    searchProduct(search: string) {
        if (search.length < 1) {
            return;
        }

        this._router.navigate(
            [
                '/search',
                search
            ]);
    }

}
