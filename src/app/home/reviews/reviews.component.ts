import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {
  reviews = [
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    },
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    },
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    },
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    },
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    },
    {
      author: '@author',
      text: 'Является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
    }
  ];

  optionsForReviewsCarousel: any = {
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
