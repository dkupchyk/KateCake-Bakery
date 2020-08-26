import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  openNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '100vw';
  }

  closeNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '0';
  }

  changePath(path: string): void {
    this.closeNav();
    this.router.navigate([path]);
  }
}
