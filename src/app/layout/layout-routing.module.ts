import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'nm', loadChildren: '../nm/node-management.module#NodeManagementModule'},
            { path: 'smartlog', loadChildren: '../smartlog/smart-log.module#SmartLogModule'},
            { path: 'fault', loadChildren: '../fm/fault-management.module#FaultManagementModule'},
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'diagnose', loadChildren: '../diagnose/diagnose.module#DiagnoseModule'},
            { path: 'sysconf', loadChildren: '../sysconf/sysconf.module#SysconfModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
