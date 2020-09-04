import {CategoriesEnum} from '../constants/categories.constant';

export interface HeaderItemInterface {
  title: string;
  fragment: CategoriesEnum;
  activated: boolean;
}
