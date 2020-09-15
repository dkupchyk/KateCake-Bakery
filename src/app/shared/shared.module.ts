import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {HeaderShrunkComponent} from './header/header-shrunk/header-shrunk.component';
import {HeaderExpandedComponent} from './header/header-expanded/header-expanded.component';
import {HeaderService} from './header/header.service';
import {FooterComponent} from './footer/footer.component';
import {SocialsWidgetComponent} from './socials-widget/socials-widget.component';
import {DataStorageService} from './data-storage.service';
import {LoadingWidgetComponent} from './loading-widget/loading-widget.component';
import {InfoModalComponent} from './info-modal/info-modal.component';
import {CarouselWidgetComponent} from './carousel-widget/carousel-widget.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HeaderShrunkComponent,
    HeaderExpandedComponent,
    LoadingWidgetComponent,
    InfoModalComponent,
    CarouselWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HttpClientModule,
    LoadingWidgetComponent,
    InfoModalComponent,
    CarouselWidgetComponent
  ],
  providers: [DataStorageService, HeaderService]
})
export class SharedModule {
}
