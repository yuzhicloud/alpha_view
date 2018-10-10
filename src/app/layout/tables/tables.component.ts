import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor(private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en',  'zh-CHS']);
        this.translate.setDefaultLang('zh-CHS');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|zh-CHS/) ? browserLang : 'zh-CHS');

    }

    ngOnInit() {}
}
