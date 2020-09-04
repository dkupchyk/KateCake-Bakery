import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesEnum} from '../constants/categories.constant';
import {DataStorageService} from '../data-storage.service';
import {HeaderService} from './header.service';
import {HeaderItemInterface} from '../models/header-item.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  screenWidth: number;
  headerItemArray: HeaderItemInterface[] = [];
  subscription: Subscription;

  constructor(private router: Router,
              private dataStorage: DataStorageService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.subscription = this.headerService.headerItemsSubject.subscribe(
      header => {
        this.headerItemArray = header;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  changePath(fragment: CategoriesEnum): void {
    this.headerService.changeActivatedItem(fragment);
    this.dataStorage.isLoading.next(true);
    this.router.navigate(['/catalog'], {fragment: fragment.toString(), preserveFragment: false});
  }

}
