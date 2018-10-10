import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, TranslateModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
