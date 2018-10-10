import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-nm-board',
    templateUrl: './nm-board.component.html',
    styleUrls: ['./nm-board.component.scss'],
    animations: [routerTransition()]
})
export class NmBoardComponent implements OnInit {

    constructor(){}
    ngOnInit() {

    }

}
