import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogPortalComponent} from './log-portal/log-portal.component';


const routes: Routes = [
    { path: '', component: LogPortalComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[]
})

export class SmartLogRoutingModule{

}