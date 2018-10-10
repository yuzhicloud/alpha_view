import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmActionComponent } from './fm-action/fm-action.component';
import { FmBoardComponent } from './fm-board/fm-board.component';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderModule } from '../shared/modules';
import { FmRoutingModule } from './fm-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        PageHeaderModule,
        FmRoutingModule
    ],
    declarations: [FmActionComponent, FmBoardComponent]
})
export class FaultManagementModule { }
