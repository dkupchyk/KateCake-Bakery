import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {CategoriesEnum} from '../../shared/constants/categories.constant';
import {Category} from '../../shared/models/category.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {HeaderService} from '../../shared/header/header.service';

@Component({
  selector: 'app-home-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.less']
})
export class AssortmentComponent {
  @Input() categories: Category[];

  constructor(private router: Router,
              private dataStorage: DataStorageService,
              private headerService: HeaderService) {
  }

  toCatalog(enumEquivalent: number): void {
    this.headerService.changeActivatedItem(enumEquivalent as CategoriesEnum);
    this.dataStorage.isLoading.next(true);
    this.router.navigate(['/catalog'], {
      queryParams: {type: enumEquivalent}
    });
  }
}
