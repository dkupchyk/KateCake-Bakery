import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

import {CategoriesEnum} from './constants/categories.constant';
import {Product} from './models/product.model';
import {Review} from './models/review.model';
import {Category} from './models/category.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
  }

  fetchReviewsData(): Observable<Review[]> {
    return this.http
      .get<Review[]>(
        'https://katecake-161ba.firebaseio.com/reviews.json'
      )
      .pipe(
        take(1),
        map(reviews => {
            return reviews;
          }
        )
      );
  }

  fetchAllCategoriesData(): Observable<Category[]> {
    return this.http
      .get<Category[]>(
        'https://katecake-161ba.firebaseio.com/categories.json'
      )
      .pipe(
        take(1),
        map(categories => {
            return categories;
          }
        )
      );
  }

  fetchCatalogData(categoryId: CategoriesEnum): Observable<Category> {
    return this.http
      .get<Category>(
        'https://katecake-161ba.firebaseio.com/categories/' + categoryId + '.json'
      )
      .pipe(
        take(1),
        map(category => {
            return category;
          }
        )
      );
  }

  fetchProductData(categoryId: CategoriesEnum, productId: number): Observable<Product> {
    return this.http
      .get<Product>('https://katecake-161ba.firebaseio.com/categories/' + categoryId + '/items/' + productId + '.json')
      .pipe(
        take(1),
        map(product => {
            return product;
          }
        )
      );
  }
}
