import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

import {DataStorageService} from '../../shared/data-storage.service';
import {Product} from '../../shared/models/product.model';
import {CategoriesEnum} from '../../shared/constants/categories.constant';
import {TELEGRAM} from '../../shared/constants/socials.constant';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.less'],
  animations: [
    trigger('mainPhoto', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('* <=> *', [
        animate(300)
      ])
    ]),
  ]
})
export class ProductDetailedComponent implements OnInit, OnDestroy {
  productId: number;
  product: Product;
  productDetailedInfo: { title: string, value: any }[] = [];

  categoryName: CategoriesEnum;
  isLoading = true;
  subscription: Subscription[] = [];
  telegramLink = TELEGRAM.link;

  mainPhoto: string;
  mainPhotoState = 'in';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToProduct();
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

  subscribeToProduct(): void {
    this.subscription.push(this.route.queryParams.subscribe(params => {
      this.categoryName = params['type'] as CategoriesEnum;
      this.productId = params['id'];

      this.dataStorage.fetchProductData(this.categoryName, this.productId).pipe(take(1)).subscribe(
        productData => {
          this.product = productData;
          this.changeProductInfo(this.product);
          this.mainPhoto = this.product.mainPhoto;
          this.isLoading = false;
        });
    }));
  }

  changeMainPhoto(imagePath: string): void {
    this.mainPhotoState = 'out';
    setTimeout(() => {
      this.mainPhoto = imagePath;
    }, 300);
  }

  changeProductInfo(product: Product): void {
    this.productDetailedInfo = [
      {
        title: 'Ингридиенты',
        value: product.ingredients
      },
      {
        title: 'Возможные добавки',
        value: product.additionals
      },
      {
        title: 'Вес',
        value: product.weight
      },
      {
        title: 'Цена',
        value: product.price
      },
    ];
  }

  onDone($event): void {
    this.mainPhotoState = 'in';
  }
}
