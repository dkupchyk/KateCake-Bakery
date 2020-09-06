import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

import {DataStorageService} from '../shared/data-storage.service';
import {CategoriesEnum} from '../shared/constants/categories.constant';
import {Category} from '../shared/models/category.model';
import {HeaderService} from '../shared/header/header.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit, OnDestroy {
  categoryName: CategoriesEnum;
  category: Category;
  subscription: Subscription[] = [];
  isLoading = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.dataStorage.isCatalogChanged.next(true);
    this.subscribeToLoading();
    this.subscribeToHeader();
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

  subscribeToHeader(): void {
    this.subscription.push(this.dataStorage.isCatalogChanged
      .subscribe(value => {
          if (value) {
            this.isLoading = true;
            this.getCatalogByQueryParams();
          }
        }
      ));
  }

  getCatalogByQueryParams(): void {
    this.subscription.push(this.route.queryParams
      .subscribe(param => {
        this.categoryName = param['type'] as CategoriesEnum;
        this.headerService.changeActivatedItem(this.categoryName);
        this.getCategoryData(this.categoryName);
      }));
  }

  getCategoryData(categoryName: CategoriesEnum): void {
    this.dataStorage.fetchCatalogData(categoryName)
      .pipe(take(1))
      .subscribe(
        categoryData => {
          this.category = categoryData;
          this.dataStorage.isCatalogChanged.next(false);
          this.isLoading = false;
        });
  }

  changeSelectedProduct(productId: number): void {
    this.router.navigate(['/products'], {
      queryParams: {
        type: this.categoryName.toString(), id: productId
      }
    });
  }
}
