import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesEnum} from '../../shared/constants/categories.constant';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../catalog-list/product-detailed/products.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {HeaderService} from '../../shared/header/header.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-home-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.less']
})
export class AssortmentComponent implements OnInit, OnDestroy {
  categories: Category[];
  isLoading = true;
  subscription: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductsService,
              private dataStorage: DataStorageService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToAssortmentData();
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
        this.categories = categoriesData;
        this.isLoading = false;
      });
  }

  toCatalog(enumEquivalent: number): void {
    this.headerService.changeActivatedItem(enumEquivalent as CategoriesEnum);
    this.dataStorage.isLoading.next(true);
    this.router.navigate(['/catalog'], {
      queryParams: {type: enumEquivalent}
    });
  }
}
