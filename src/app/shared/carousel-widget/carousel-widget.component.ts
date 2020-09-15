import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carousel-widget',
  templateUrl: './carousel-widget.component.html',
  styleUrls: ['./carousel-widget.component.less'],
  animations: [
    trigger('slides', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('* <=> *', [
        animate(300)
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  slidesState = 'in';

  ngOnInit(): void {
    this.changeActivatedSlidesArray();
  }

  previous(): void {
    this.changeState();
    setTimeout(() => {
      this.startIndex = (this.startIndex - this.settings.itemsPerSlide) < 0
        ? this.slides.length - this.slides.length % this.settings.itemsPerSlide
        : this.startIndex - this.settings.itemsPerSlide;
      this.changeActivatedSlidesArray();
    }, 300);
  }

  next(): void {
    this.changeState();
    setTimeout(() => {
      this.startIndex = (this.startIndex + this.settings.itemsPerSlide) >= this.slides.length
        ? 0
        : this.startIndex + this.settings.itemsPerSlide;
      this.changeActivatedSlidesArray();
    }, 300);
  }

  changeActivatedSlidesArray(): void {
    this.activatedSlides = [];
    for (let i = 0; i < this.settings.itemsPerSlide; i++) {
      this.activatedSlides.push(this.startIndex + i);
    }
  }

  changeSlides(index: number): void {
    this.changeState();
    setTimeout(() => {
      this.startIndex = Math.trunc(index / this.settings.itemsPerSlide) * this.settings.itemsPerSlide;
      this.changeActivatedSlidesArray();
    }, 300);
  }

  onDone($event): void {
    this.slidesState = 'in';
  }

  changeState(): void {
    this.slidesState = 'out';
  }
}
