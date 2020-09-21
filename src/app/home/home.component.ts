import {Component, OnDestroy, OnInit} from '@angular/core';
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
  reviews: Review[] = null;
  assortmentCategories: Category[] = [];
  subscription: Subscription;
  currentsSection = 2;
  isLoading = true;

  constructor(private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribeToLoading(): void {
    this.subscription = this.dataStorage.isLoading.subscribe(value => {
      this.isLoading = value;
    });
    this.isLoading = false;
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

  processData(): void {
    switch (this.currentsSection) {
      case 3:
        this.subscribeToAssortmentData();
        break;

      case 4:
        this.subscribeToReviewsData();
        break;

      default:
        break;
    }
    this.changeVisibility(this.currentsSection);
    this.currentsSection++;
  }

  private changeVisibility(id: number): void {
    if (id > 0 && id < 6) {
      (document.getElementById('component-' + id) as HTMLElement).style.display = 'block';
    }
  }
}
