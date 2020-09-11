import {Component, HostListener, OnInit} from '@angular/core';
import {SOCIAL_LINKS} from '../constants/socials.constant';

@Component({
  selector: 'app-socials-widget',
  templateUrl: './socials-widget.component.html',
  styleUrls: ['./socials-widget.component.less']
})
export class SocialsWidgetComponent implements OnInit {
  screenWidth: number;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  getSocialLinks(): {name: string, iconPath: string, link: string}[] {
    return SOCIAL_LINKS;
  }
}
