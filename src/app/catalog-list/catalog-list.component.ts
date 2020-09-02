import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
import {PRODUCTS} from './products.constant';
import {Product} from '../shared/models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from './product-detailed/products.service';
import {DataStorageService} from '../shared/data-storage.service';
import {CategoriesEnum} from '../shared/constants/categories.constant';
import {Category} from '../shared/models/category.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit {
  categoryName: CategoriesEnum;
  category: Category;

  constructor(private categoriesService: CategoriesService,
              private productService: ProductsService,
              private dataStorage: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoriesService.selectedCategory.subscribe(
      selectedCategory => {
        this.categoryName = selectedCategory;
      }
    );
    this.dataStorage.fetchData(this.categoryName).subscribe(
      categoryData => {
        this.category = categoryData;
      }
    );
  }

  changeSelectedProduct(product: Product): void {
    this.productService.selectedProduct.next(product);
    this.router.navigate(['product']);
  }

}
