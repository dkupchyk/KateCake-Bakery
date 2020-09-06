import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Review} from '../../shared/models/review.model';
import {CAROUSEL_OPTIONS} from '../../shared/constants/carousel-settings.constant';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {
  @Input() reviews: Review[];
  optionsForReviewsCarousel = CAROUSEL_OPTIONS;
}
