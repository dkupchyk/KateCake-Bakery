import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.less']
})
export class SocialsComponent implements OnInit {
  screenWidth: number;
  photosRow = [];

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenWidth > 770
      ? this.photosRow = [
        'assets/images/main/instagram-row/1.jpg',
        'assets/images/main/instagram-row/2.jpg',
        'assets/images/main/instagram-row/3.jpg',
        'assets/images/main/instagram-row/1.jpg',
        'assets/images/main/instagram-row/2.jpg',
        'assets/images/main/instagram-row/3.jpg']
      : this.photosRow = [
        'assets/images/main/instagram-row/1.jpg',
        'assets/images/main/instagram-row/2.jpg',
        'assets/images/main/instagram-row/3.jpg'
      ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

}
