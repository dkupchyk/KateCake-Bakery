import {Product} from './product-detailed/product.model';

export const PRODUCTS = [
  {
    name: 'Торты',
    imagePath: 'assets/images/main/main-cake.png',
    detailedText: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.',
    items: [
      new Product(
        'торт 1',
        ['assets/images/main/main-cake.png', 'assets/images/main/main-cake.png'],
        'kdnvkdflnvkdf',
        ',kvnfdkjvnf',
        '200 г',
        300
      ),
      new Product(
        'торт 2',
        ['assets/images/main/main-cake.png', 'assets/images/main/main-cake.png'],
        'kdnvkdflnvkdf',
        ',kvnfdkjvnf',
        '200 г',
        300
      ),
      new Product(
        'торт 3',
        ['assets/images/main/main-cake.png', 'assets/images/main/main-cake.png'],
        'kdnvkdflnvkdf',
        ',kvnfdkjvnf',
        '200 г',
        300
      ),
      new Product(
        'торт 4',
        ['assets/images/main/main-cake.png', 'assets/images/main/main-cake.png'],
        'kdnvkdflnvkdf',
        ',kvnfdkjvnf',
        '200 г',
        300
      ),
      new Product(
        'торт 5',
        ['assets/images/main/main-cake.png', 'assets/images/main/main-cake.png'],
        'kdnvkdflnvkdf',
        ',kvnfdkjvnf',
        '200 г',
        300
      )
    ],
  },
  {
    name: 'Чизкейки',
    imagePath: 'assets/images/main/main-cake.png',
    detailedText: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
  }
];
