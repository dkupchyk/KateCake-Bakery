import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
import {PRODUCTS} from './products.constant';
import {Product} from './product-detailed/product.model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ProductsService} from './product-detailed/products.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit {
  productName: string;
  productImagePath: string;
  productText: string;
  products: Product[] = [];

  constructor(private categoriesService: CategoriesService,
              private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.categoriesService.selectedCategory.subscribe(
      product => {
        switch (product) {
          case 'Торты':
            this.productName = PRODUCTS[0].name;
            this.productImagePath = PRODUCTS[0].imagePath;
            this.productText = PRODUCTS[0].detailedText;
            this.products = PRODUCTS[0].items;
            break;

          case 'Чизкейки':
            this.productName = PRODUCTS[1].name;
            this.productImagePath = PRODUCTS[1].imagePath;
            this.productText = PRODUCTS[1].detailedText;
            this.products = PRODUCTS[1].items;
            break;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  changeSelectedProduct(product: Product): void {
    this.productService.selectedProduct.next(product);
    this.router.navigate(['product']);
    // this.router.navigate(['product'], {relativeTo: this.route});
  }
}
