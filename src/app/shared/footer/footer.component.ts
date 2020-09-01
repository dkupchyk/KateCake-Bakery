import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from '../../catalog-list/categories.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router,
              private productService: CategoriesService) {
  }

  ngOnInit(): void {
  }

  changeSelectedProduct(selectedItem: string): void {
    this.productService.selectedCategory.next(selectedItem);
  }

  changePath(link: string): void {
    this.changeSelectedProduct(link);
    this.router.navigate(['catalog']);
  }

}
