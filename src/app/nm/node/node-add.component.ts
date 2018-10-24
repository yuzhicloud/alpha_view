import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {NodeService} from '../service/NodeService';
import {bindCallback} from "rxjs";

@Component({
    selector: 'app-node-add',
    templateUrl: './node-add.component.html',
    styleUrls: ['./node-add.component.scss'],
    animations: [routerTransition()]
})
export class NodeAddComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private nodeService: NodeService) { }

    addForm: FormGroup;

    ngOnInit() {

        this.addForm = this.formBuilder.group({
            // id: [],
            ipAddr: ['', Validators.required],
            name: [''],
            user: [''],
            password: [''],
            location: [''],
            status: ['']
        });

    }

    onSubmit() {
        console.log(this.addForm.value);
        this.nodeService.createNode(this.addForm.value)
            .subscribe( data => {
                this.router.navigate(['nm']);
            });
    }

    onCancel(){
        this.router.navigate(['nm']);
    }

}
