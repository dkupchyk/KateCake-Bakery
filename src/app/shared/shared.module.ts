import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import { HeaderShrunkComponent } from './header/header-shrunk/header-shrunk.component';
import { HeaderExpandedComponent } from './header/header-expanded/header-expanded.component';
import {HeaderService} from './header/header.service';
import {AppRoutingModule} from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SocialsWidgetComponent } from './socials-widget/socials-widget.component';
import {DataStorageService} from './data-storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HeaderShrunkComponent,
    HeaderExpandedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HttpClientModule
  ],
  providers: [DataStorageService, HeaderService]
})
export class SharedModule {
}
