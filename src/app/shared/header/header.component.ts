import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesEnum} from '../constants/categories.constant';
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

  changePath(): void {
    this.dataStorage.isLoading.next(true);
  }

  public get categoriesEnum(): typeof CategoriesEnum {
    return CategoriesEnum;
  }
}
