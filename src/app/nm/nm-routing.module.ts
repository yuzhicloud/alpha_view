import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NmBoardComponent} from './nm-board/nm-board.component';

const routes: Routes = [
    {
        path: '', component : NmBoardComponent
    }
];

@NgModule ({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class NmRoutingModule {

}
