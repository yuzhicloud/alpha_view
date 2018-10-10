import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NmBoardComponent } from './nm-board/nm-board.component';
import {NmRoutingModule} from './nm-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {PageHeaderModule} from '../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        NmRoutingModule,
        TranslateModule,
        PageHeaderModule
    ],
    declarations: [NmBoardComponent]
})
export class NodeManagementModule { }
