import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {NavigationEnd, Router} from '@angular/router';
import {DiagnoseJob} from './diagnose-job.model';
import {DiagnoseService} from './diagnose-service';

@Component({
    selector: 'app-diagnose',
    templateUrl: './diagnose.component.html',
    styleUrls: ['./diagnose.component.scss'],
    animations: [routerTransition()],
})
export class DiagnoseComponent implements OnInit {

    diagnoseJobs: DiagnoseJob[];

    constructor(private router: Router, private diagnoseService: DiagnoseService) {

    }

    ngOnInit() {
        /*this.diagnoseService.getJobs()
            .subscribe( data => {
                this.diagnoseJobs = data;
            });*/
    }

    getJobs() {
        this.diagnoseService.getJobs()
            .subscribe( data => {
                this.diagnoseJobs = data;
            });
    }
}
