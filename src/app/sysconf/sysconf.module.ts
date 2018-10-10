import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysconfboardComponent } from './sysconfboard/sysconfboard.component';
import {TranslateModule} from '@ngx-translate/core';
import {PageHeaderModule} from '../shared/modules';
import {SysconfRoutingModule} from './sysconf-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        PageHeaderModule,
        SysconfRoutingModule
    ],
    declarations: [SysconfboardComponent]
})
export class SysconfModule { }
