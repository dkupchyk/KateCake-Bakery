import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from '../../catalog-list/categories.service';
import {CategoriesEnum} from '../constants/categories.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;

  constructor(private router: Router,
              private productService: CategoriesService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  changeSelectedProduct(selectedItem: CategoriesEnum): void {
    this.productService.selectedCategory.next(selectedItem);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  openNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '100vw';
  }

  closeNav(): void {
    (document.getElementById('header-shrinked') as HTMLElement).style.width = '0';
  }

  changePath(category: CategoriesEnum): void {
    this.closeNav();
    this.changeSelectedProduct(category);
    this.router.navigate(['catalog']);
  }

  public get categoriesEnum(): typeof CategoriesEnum {
    return CategoriesEnum;
  }
}
