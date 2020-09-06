import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {AboutKateComponent} from './about-kate/about-kate.component';
import {AssortmentComponent} from './assortment/assortment.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SocialsComponent} from './socials/socials.component';

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
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: []
})
export class HomeModule {
}
