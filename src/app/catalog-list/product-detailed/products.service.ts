import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../shared/models/product.model';

@Injectable()
export class ProductsService {
  selectedProduct = new BehaviorSubject<Product>(null);
}
