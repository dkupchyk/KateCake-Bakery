import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from './product-detailed/products.service';
import {DataStorageService} from '../shared/data-storage.service';
import {CategoriesEnum} from '../shared/constants/categories.constant';
import {Category} from '../shared/models/category.model';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

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

  constructor(private productService: ProductsService,
              private dataStorage: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription.push(this.dataStorage.isLoading.subscribe(value => {
      this.isLoading = value;
    }));
    this.subscription.push(this.route.fragment.subscribe(fragment => {
      this.categoryName = fragment as CategoriesEnum;
      this.dataStorage.fetchData(this.categoryName).pipe(take(1)).subscribe(
        categoryData => {
          this.category = categoryData;
          this.isLoading = false;
        });
    }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  changeSelectedProduct(product: Product): void {
    this.productService.selectedProduct.next(product);
    this.router.navigate(['product']);
  }

}
