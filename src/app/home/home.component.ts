import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

import {Review} from '../shared/models/review.model';
import {Category} from '../shared/models/category.model';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  assortmentCategories: Category[] = [];
  subscription: Subscription;
  isLoading = true;

  // settings = {
  //   itemsPerSlide: 3,
  //   interval: 2000,
  //   pauseOnFocus: true,
  //   showArrows: true,
  //   showIndicators: true
  // };
  // customSlidesClass = '';
  // slides: HTMLElement[] = [
  //   {image: 'assets/images/main/assortment-cakes.png'},
  //   {image: 'assets/images/main/assortment-cheesecakes.png'},
  //   {image: 'assets/images/main/assortment-cupcakes.png'},
  //   {image: 'assets/images/main/assortment-cakes.png'},
  //   {image: 'assets/images/main/assortment-cheesecakes.png'},
  //   {image: 'assets/images/main/assortment-cupcakes.png'},
  //   {image: 'assets/images/main/assortment-cakes.png'}
  // ];

  constructor(private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToAssortmentData();
    this.subscribeToReviewsData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribeToLoading(): void {
    this.subscription = this.dataStorage.isLoading.subscribe(value => {
      this.isLoading = value;
    });
  }

  subscribeToAssortmentData(): void {
    this.dataStorage.fetchAllCategoriesData().pipe(take(1)).subscribe(
      categoriesData => {
        this.assortmentCategories = categoriesData;
        this.isLoading = false;
      });
  }

  subscribeToReviewsData(): void {
    this.dataStorage.fetchReviewsData().pipe(take(1)).subscribe(
      reviewsData => {
        this.reviews = reviewsData;
        this.isLoading = false;
      });
  }
}
