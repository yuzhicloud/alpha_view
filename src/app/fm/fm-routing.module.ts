import {Router, RouterModule, Routes} from '@angular/router';
import {FmBoardComponent} from './fm-board/fm-board.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
    {path: '', component: FmBoardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[]
})

export class FmRoutingModule {

}