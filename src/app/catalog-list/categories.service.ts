import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class CategoriesService {
  selectedCategory = new BehaviorSubject<string>('Торты');
}
