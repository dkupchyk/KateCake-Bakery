import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesEnum} from '../constants/categories.constant';
import {CatalogListComponent} from '../../catalog-list/catalog-list.component';
import {DataStorageService} from '../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;

  constructor(private router: Router,
              private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  openNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '100%';
  }

  closeNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '0';
  }

  changePath(category: CategoriesEnum): void {
    if (this.screenWidth <= 768) {
      this.closeNav();
    }
    this.dataStorage.isLoading.next(true);
  }

  public get categoriesEnum(): typeof CategoriesEnum {
    return CategoriesEnum;
  }
}
