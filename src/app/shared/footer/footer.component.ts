import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesEnum} from '../constants/categories.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changePath(selectedCategory: CategoriesEnum): void {
    this.router.navigate(['/catalog'], {fragment: selectedCategory});
  }

  public get categoriesEnum(): typeof CategoriesEnum {
    return CategoriesEnum;
  }


}
