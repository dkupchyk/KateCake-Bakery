import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-socials-widget',
  templateUrl: './socials-widget.component.html',
  styleUrls: ['./socials-widget.component.less']
})
export class SocialsWidgetComponent implements OnInit {
  screenWidth: number;

  constructor() {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

}
