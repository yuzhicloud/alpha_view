import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnoseComponent } from './diagnose.component';
import {DiagnoseRoutingModule} from './diagnose-routing.module';
import {PageHeaderModule} from '../shared/modules';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        DiagnoseRoutingModule,
        PageHeaderModule,
        TranslateModule
    ],
    declarations: [DiagnoseComponent]
})
export class DiagnoseModule { }
