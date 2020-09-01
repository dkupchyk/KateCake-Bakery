import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {PRODUCTS} from './products.constant';


@Injectable()
export class ProductsService {
  selectedProduct = new Subject<string>();
}
