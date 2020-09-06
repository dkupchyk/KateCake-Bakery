import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {AboutKateComponent} from './about-kate/about-kate.component';
import {AssortmentComponent} from './assortment/assortment.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SocialsComponent} from './socials/socials.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AboutKateComponent,
    AssortmentComponent,
    ReviewsComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
  ],
  providers: []
})
export class HomeModule {
}
