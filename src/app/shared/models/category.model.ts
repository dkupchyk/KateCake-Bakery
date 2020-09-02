import {Product} from './product.model';

export class Category {
  constructor(public name: string,
              public imagePath: string,
              public detailedText: string,
              public items: Product[]
              ) {
  }
}
