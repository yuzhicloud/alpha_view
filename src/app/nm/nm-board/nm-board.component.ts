import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { NodeService } from '../service/NodeService';
import { Node } from '../model/node.model';

@Component({
    selector: 'app-nm-board',
    templateUrl: './nm-board.component.html',
    styleUrls: ['./nm-board.component.scss'],
    animations: [routerTransition()]
})
export class NmBoardComponent implements OnInit {

    nodes: Node[];
    // : any = [];

    constructor(private router: Router, private nodeService: NodeService) {

    }

    ngOnInit() {
        this.nodeService.getNodes()
            .subscribe( data => {
                this.nodes = data;
            });
    }

    deleteNode(node: Node): void {
        this.nodeService.deleteNode(node.id)
            .subscribe( data => {
                this.nodes = this.nodes.filter(u => u !== node);
            })
    }

    editNode(node: Node) {
        console.log('Edit Node =======>' + node);
        localStorage.removeItem('editNodeId');
        localStorage.setItem('editNodeId', node.id.toString());
        console.log('Edit Node:NodeId =======>' + node.id.toString());
        this.router.navigate(['nm/edit-node']);
    }


}
