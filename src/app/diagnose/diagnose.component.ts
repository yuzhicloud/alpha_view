import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-diagnose',
    templateUrl: './diagnose.component.html',
    styleUrls: ['./diagnose.component.scss'],
    animations: [routerTransition()],
})
export class DiagnoseComponent implements OnInit {

    constructor(){}

    ngOnInit() {
    }

    startJob() {

    }
}
