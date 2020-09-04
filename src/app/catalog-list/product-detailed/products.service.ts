import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProductsService {
  selectedProduct = new BehaviorSubject<number>(null);
}
