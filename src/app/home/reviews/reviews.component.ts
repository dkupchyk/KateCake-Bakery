import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

import {DataStorageService} from '../../shared/data-storage.service';
import {Review} from '../../shared/models/review.model';
import {CAROUSEL_OPTIONS} from '../../shared/constants/carousel-settings.constant';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent {
  @Input() reviews: Review[];
  optionsForReviewsCarousel = CAROUSEL_OPTIONS;

  constructor() {
  }
}
