import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NodeService} from '../service/NodeService';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-node-edit',
    templateUrl: './node-edit.component.html',
    styleUrls: ['./node-edit.component.scss'],
    animations: [routerTransition()]
})
export class NodeEditComponent implements OnInit {


    node: Node;
    editForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private nodeService: NodeService) {

    }

    ngOnInit() {
        let nodeId = localStorage.getItem('editNodeId');
        if(!nodeId) {
            alert('Invalid action.')
            this.router.navigate(['nm']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            ipAddr: ['', Validators.required],
            name: [''],
            user: [''],
            password: [''],
            location: [''],
            status: ['']
        });
        this.nodeService.getNodeById(+nodeId)
            .subscribe( data => {
                this.editForm.setValue(data);
            });

    }

    onSubmit() {
        this.nodeService.updateNode(this.editForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['nm']);
                },
                error => {
                    alert(error);
                });
    }

    onCancel(){
        this.router.navigate(['nm']);
    }
}
