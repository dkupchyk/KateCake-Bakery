import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { SocialsWidgetComponent } from './socials-widget/socials-widget.component';

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
    SocialsWidgetComponent
  ],
  providers: []
})
export class SharedModule {
}
