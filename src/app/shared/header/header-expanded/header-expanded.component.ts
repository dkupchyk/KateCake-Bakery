import {Component, HostListener, OnInit} from '@angular/core';
import {HeaderComponent} from '../header.component';
import {HeaderItemInterface} from '../../models/header-item.interface';
import {Router} from '@angular/router';
import {DataStorageService} from '../../data-storage.service';
import {HeaderService} from '../header.service';
import {PHOTOS_EXPANDED, PHOTOS_SHRUNK} from '../../constants/social-carousel-photos.constant';
import {take} from 'rxjs/operators';
import {CategoriesEnum} from '../../constants/categories.constant';

@Component({
  selector: 'app-header-expanded',
  templateUrl: './header-expanded.component.html',
  styleUrls: ['./header-expanded.component.less']
})
export class HeaderExpandedComponent implements OnInit{
  headerItemArrayRight: HeaderItemInterface[] = [];
  headerItemArrayLeft: HeaderItemInterface[] = [];

  constructor(private router: Router,
              private dataStorage: DataStorageService,
              private headerService: HeaderService,
              public headerComponent: HeaderComponent) {
  }

  ngOnInit(): void {
    this.initializeHeaderItems();
  }

  initializeHeaderItems(): void {
    this.headerItemArrayRight = this.headerComponent.headerItemArray.slice(0, 3);
    this.headerItemArrayLeft = this.headerComponent.headerItemArray.slice(3, 5);
  }
}
