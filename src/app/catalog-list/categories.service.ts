import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CategoriesService {
  selectedCategory = new Subject<string>();
}
