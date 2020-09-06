import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {HeaderShrunkComponent} from './header/header-shrunk/header-shrunk.component';
import {HeaderExpandedComponent} from './header/header-expanded/header-expanded.component';
import {HeaderService} from './header/header.service';
import {FooterComponent} from './footer/footer.component';
import {SocialsWidgetComponent} from './socials-widget/socials-widget.component';
import {DataStorageService} from './data-storage.service';
import {LoadingWidgetComponent} from './loading-widget/loading-widget.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HeaderShrunkComponent,
    HeaderExpandedComponent,
    LoadingWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HttpClientModule,
    LoadingWidgetComponent
  ],
  providers: [DataStorageService, HeaderService]
})
export class SharedModule {
}
