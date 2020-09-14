import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-widget',
  templateUrl: './carousel-widget.component.html',
  styleUrls: ['./carousel-widget.component.less']
})
export class CarouselWidgetComponent implements OnInit {
  @Input() settings: {
    itemsPerSlide: number,
    interval: number,
    pauseOnFocus: boolean,
    showArrows: boolean,
    showIndicators: boolean
  };
  @Input() customSlidesClass: string;
  @Input() slides: any[];

  startIndex = 0;
  activatedSlides: number[] = [];

  ngOnInit(): void {
    this.changeActivatedSlidesArray();
  }

  previous(): void {
    this.startIndex = (this.startIndex - this.settings.itemsPerSlide) < 0
      ? this.slides.length - this.slides.length % this.settings.itemsPerSlide
      : this.startIndex - this.settings.itemsPerSlide;
    this.changeActivatedSlidesArray();
  }

  next(): void {
    this.startIndex = (this.startIndex + this.settings.itemsPerSlide) >= this.slides.length
      ? 0
      : this.startIndex + this.settings.itemsPerSlide;
    this.changeActivatedSlidesArray();
  }

  changeActivatedSlidesArray(): void {
    this.activatedSlides = [];
    for (let i = 0; i < this.settings.itemsPerSlide; i++) {
      this.activatedSlides.push(this.startIndex + i);
    }
  }

  changeSlides(index: number): void {
    this.startIndex = Math.trunc(index / this.settings.itemsPerSlide) * this.settings.itemsPerSlide;
    this.changeActivatedSlidesArray();
  }

}
