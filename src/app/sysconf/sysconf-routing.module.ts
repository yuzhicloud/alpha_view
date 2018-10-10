import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SysconfboardComponent } from './sysconfboard/sysconfboard.component';


const routes: Routes = [
    {
        path: '',
        component: SysconfboardComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule],
    declarations: []
})

export class SysconfRoutingModule {

}