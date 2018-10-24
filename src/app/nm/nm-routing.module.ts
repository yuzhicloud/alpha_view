import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NmBoardComponent} from './nm-board/nm-board.component';
import {NodeAddComponent} from './node/node-add.component';
import {NodeEditComponent} from './node/node-edit.component';

const routes: Routes = [
    { path: '', component : NmBoardComponent},
    { path: 'edit-node', component : NodeEditComponent },
    { path: 'add-node', component : NodeAddComponent }
];

@NgModule ({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class NmRoutingModule {

}
