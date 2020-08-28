import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.less']
})
export class AssortmentComponent implements OnInit {
  assortmentArray = [
    {
      title: 'Торты',
      imagePath: 'assets/images/main/assortment-cakes.png',
      hoverImagePath: 'assets/images/main/assortment-cakes-overlay.png'
    },
    {
      title: 'Чизкейки',
      imagePath: 'assets/images/main/assortment-cheesecakes.png',
      hoverImagePath: 'assets/images/main/assortment-cheesecakes-overlay.png'
    },
    {
      title: 'Капкейки',
      imagePath: 'assets/images/main/assortment-cupcakes.png',
      hoverImagePath: 'assets/images/main/assortment-cupcakes-overlay.png'
    },
    {
      title: 'Макароны',
      imagePath: 'assets/images/main/assortment-macarons.png',
      hoverImagePath: 'assets/images/main/assortment-macarons-overlay.png'
    },
    {
      title: 'Эскимо-кейкпопсы',
      imagePath: 'assets/images/main/assortment-eskimo.png',
      hoverImagePath: 'assets/images/main/assortment-eskimo-overlay.png'
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
