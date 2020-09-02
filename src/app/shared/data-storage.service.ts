import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './models/category.model';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CategoriesEnum} from './constants/categories.constant';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
  ) {
  }

  fetchData(categoryName: CategoriesEnum): Observable<Category> {
    return this.http
      .get<Category>(
        'https://katecake-161ba.firebaseio.com/categories/' + categoryName + '.json'
      )
      .pipe(
        take(1),
        map(category => {
            return category;
          }
        )
      );
  }
}
