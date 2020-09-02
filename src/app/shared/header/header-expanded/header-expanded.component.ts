import {Component} from '@angular/core';
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'app-header-expanded',
  templateUrl: './header-expanded.component.html',
  styleUrls: ['./header-expanded.component.less']
})
export class HeaderExpandedComponent {
  constructor(private headerComponent: HeaderComponent) {
  }
}
