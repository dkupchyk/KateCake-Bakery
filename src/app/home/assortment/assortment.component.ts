import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.less']
})
export class AssortmentComponent implements OnInit {
  assortmentArray = [
    { title: 'Торты', imagePath: 'assets/images/main/assortment-cakes.png' },
    { title: 'Чизкейки', imagePath: 'assets/images/main/assortment-cheesecakes.png' },
    { title: 'Капкейки', imagePath: 'assets/images/main/assortment-cupcakes.png' },
    { title: 'Макароны', imagePath: 'assets/images/main/assortment-macarons.png' },
    { title: 'Эскимо-кейкпопсы', imagePath: 'assets/images/main/assortment-eskimo.png' },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
