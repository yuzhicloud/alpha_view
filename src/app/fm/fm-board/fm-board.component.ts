import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-fm-board',
    templateUrl: './fm-board.component.html',
    styleUrls: ['./fm-board.component.scss'],
    animations: [routerTransition()]
})
export class FmBoardComponent implements OnInit {

    constructor(){}

    ngOnInit() {
    }

}
