import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NmBoardComponent } from './nm-board/nm-board.component';
import { NmRoutingModule } from './nm-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderModule } from '../shared/modules';
import { NodeComponent } from './node/node.component';
import { NodeAddComponent } from './node/node-add.component';
import { NodeEditComponent } from './node/node-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NodeService} from './service/NodeService';


@NgModule({
    imports: [
        CommonModule,
        NmRoutingModule,
        TranslateModule,
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [NmBoardComponent, NodeAddComponent, NodeComponent, NodeEditComponent],
    providers: [NodeService],
})
export class NodeManagementModule { }
