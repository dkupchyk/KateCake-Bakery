import { Component, OnInit } from '@angular/core';
import {CategoriesEnum} from '../../shared/constants/categories.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent{

  constructor(private router: Router) { }

  toCakeCatalog(): void {
    this.router.navigate(['/catalog'], {fragment: CategoriesEnum.Cakes});
  }

}
