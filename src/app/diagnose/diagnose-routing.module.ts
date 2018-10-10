import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiagnoseComponent } from './diagnose.component';


const routes: Routes = [
    {
        path: '',
        component: DiagnoseComponent
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
export class DiagnoseRoutingModule { }
