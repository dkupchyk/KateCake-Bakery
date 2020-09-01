import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {PRODUCTS} from './products.constant';
import {Product} from './product-detailed/product.model';

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

  constructor(private productsService: ProductsService) {
    this.productsService.selectedProduct.subscribe(
      product => {
        switch (product) {
          case 'Торты':
            this.productName = PRODUCTS[0].name;
            this.productImagePath = PRODUCTS[0].imagePath;
            this.productText = PRODUCTS[0].detailedText;
            this.products =  PRODUCTS[0].items;
            break;

          case 'Чизкейки':
            this.productName = PRODUCTS[1].name;
            this.productImagePath = PRODUCTS[1].imagePath;
            this.productText = PRODUCTS[1].detailedText;
            this.products =  PRODUCTS[1].items;
            break;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
