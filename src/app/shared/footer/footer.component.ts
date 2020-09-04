import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesEnum} from '../constants/categories.constant';
import {DataStorageService} from '../data-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
  }

  changeState(): void {
    this.dataStorage.isLoading.next(true);
  }

  public get categoriesEnum(): typeof CategoriesEnum {
    return CategoriesEnum;
  }
}
