import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CategoriesEnum} from '../constants/categories.constant';
import {HeaderItemInterface} from '../models/header-item.interface';

@Injectable()
export class HeaderService {
  headerItems: HeaderItemInterface[] = [
    {title: 'Торты', enumParam: CategoriesEnum.Cakes, activated: false},
    {title: 'Чизкейки', enumParam: CategoriesEnum.Cheesecakes, activated: false},
    {title: 'Капкейки', enumParam: CategoriesEnum.Cupcakes, activated: false},
    {title: 'Макароны', enumParam: CategoriesEnum.Macarons, activated: false},
    {title: 'Эскимо-кейкпопсы', enumParam: CategoriesEnum.Eskimo, activated: false},
  ];
  headerItemsSubject = new BehaviorSubject<HeaderItemInterface[]>(this.headerItems);

  changeActivatedItem(type: CategoriesEnum): void {
    this.headerItems.forEach(item => {
      +item.enumParam === +type
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
