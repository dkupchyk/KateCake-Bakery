import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../../catalog-list/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;

  constructor(private router: Router,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  changeSelectedProduct(selectedItem: string): void {
    this.productService.selectedProduct.next(selectedItem);
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

  changePath(link: string): void {
    this.closeNav();
    this.changeSelectedProduct(link);
    this.router.navigate(['catalog']);
  }
}
