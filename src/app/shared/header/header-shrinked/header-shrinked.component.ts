import {Component} from '@angular/core';
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'app-header-shrinked',
  templateUrl: './header-shrinked.component.html',
  styleUrls: ['./header-shrinked.component.less']
})
export class HeaderShrinkedComponent {

  constructor(public headerComponent: HeaderComponent) {
  }

  openNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '100%';
  }

  closeNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '0';
  }

  changePath(): void {
    this.closeNav();
    this.headerComponent.changePath();
  }

}
