import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {AboutKateComponent} from './about-kate/about-kate.component';
import {AssortmentComponent} from './assortment/assortment.component';
import {ReviewsComponent} from './reviews/reviews.component';
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
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class HomeModule {
}
