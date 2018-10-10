import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-log-portal',
    templateUrl: './log-portal.component.html',
    styleUrls: ['./log-portal.component.scss'],
    animations: [routerTransition()]
})
export class LogPortalComponent implements OnInit {

    constructor(){}

    ngOnInit() {
    }

}
