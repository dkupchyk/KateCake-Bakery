import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  isLoading = true;
  subscription: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToAssortmentData();
    this.subscribeToReviewsData();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  subscribeToLoading(): void {
    this.subscription.push(this.dataStorage.isLoading.subscribe(value => {
      this.isLoading = value;
    }));
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
