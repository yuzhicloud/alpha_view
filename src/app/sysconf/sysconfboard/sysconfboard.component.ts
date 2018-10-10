import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-sysconfboard',
    templateUrl: './sysconfboard.component.html',
    styleUrls: ['./sysconfboard.component.scss'],
    animations: [routerTransition()]
})
export class SysconfboardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
