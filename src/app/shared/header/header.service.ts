import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CategoriesEnum} from '../constants/categories.constant';
import {HeaderItemInterface} from '../models/header-item.interface';

@Injectable()
export class HeaderService {
  headerItems: HeaderItemInterface[] = [
    {title: 'Торты', fragment: CategoriesEnum.Cakes, activated: false},
    {title: 'Чизкейки', fragment: CategoriesEnum.Cheesecakes, activated: false},
    {title: 'Капкейки', fragment: CategoriesEnum.Cupcakes, activated: false},
    {title: 'Макароны', fragment: CategoriesEnum.Macarons, activated: false},
    {title: 'Эскимо-кейкпопсы', fragment: CategoriesEnum.Eskimo, activated: false},
  ];

  headerItemsSubject = new BehaviorSubject<HeaderItemInterface[]>(this.headerItems);

  changeActivatedItem(fragment: CategoriesEnum): void {
    this.headerItems.forEach(item => {
      item.fragment === fragment
        ? item.activated = true
        : item.activated = false;
    });
    this.headerItemsSubject.next(this.headerItems);
  }

  unactivateAll(): void {
    this.headerItems.forEach(item => {
       item.activated = false;
    });
    this.headerItemsSubject.next(this.headerItems);
  }
}
