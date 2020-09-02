import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { SocialsWidgetComponent } from './socials-widget/socials-widget.component';
import {DataStorageService} from './data-storage.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderShrinkedComponent } from './header/header-shrinked/header-shrinked.component';
import { HeaderExpandedComponent } from './header/header-expanded/header-expanded.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent,
    HeaderShrinkedComponent,
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
  providers: [DataStorageService]
})
export class SharedModule {
}
