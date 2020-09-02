import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { SocialsWidgetComponent } from './socials-widget/socials-widget.component';
import {DataStorageService} from './data-storage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsWidgetComponent
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
