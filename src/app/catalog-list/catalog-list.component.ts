import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from './product-detailed/products.service';
import {DataStorageService} from '../shared/data-storage.service';
import {CategoriesEnum} from '../shared/constants/categories.constant';
import {Category} from '../shared/models/category.model';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';
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
              private productService: ProductsService,
              private dataStorage: DataStorageService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToFragment();
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

  subscribeToFragment(): void {
    this.subscription.push(this.route.fragment.subscribe(fragment => {
      this.categoryName = fragment as CategoriesEnum;
      this.headerService.changeActivatedItem(this.categoryName);

      this.dataStorage.fetchData(this.categoryName).pipe(take(1)).subscribe(
        categoryData => {
          this.category = categoryData;
          this.isLoading = false;
        });

    }));
  }

  changeSelectedProduct(product: Product): void {
    this.productService.selectedProduct.next(product);
    this.router.navigate(['products'], {relativeTo: this.route});
  }

}
