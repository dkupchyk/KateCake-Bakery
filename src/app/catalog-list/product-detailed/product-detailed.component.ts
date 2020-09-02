import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.less']
})
export class ProductDetailedComponent implements OnInit {
  product: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.selectedProduct.subscribe(product => {
      this.product = product;
    });

    console.log(this.product);
  }

}
