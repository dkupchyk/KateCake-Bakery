import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {CategoriesEnum} from '../shared/constants/categories.constant';

@Injectable()
export class CategoriesService {
  selectedCategory = new BehaviorSubject<CategoriesEnum>(CategoriesEnum.Cakes);
}
