import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogPortalComponent } from './log-portal/log-portal.component';
import {TranslateModule} from '@ngx-translate/core';
import {PageHeaderModule} from '../shared/modules';
import {SmartLogRoutingModule} from './smart-log-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        PageHeaderModule,
        SmartLogRoutingModule
    ],
    declarations: [LogPortalComponent]
})
export class SmartLogModule { }
