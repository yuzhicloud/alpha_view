import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by" >Powered by yuzhicloud <b><a href="https://www.yuzhicloud.com" target="_blank">YuzhiCloud</a></b> 2018</span>
  `,
})
export class FooterComponent {
}
