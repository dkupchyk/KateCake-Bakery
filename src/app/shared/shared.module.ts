import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: []
})
export class SharedModule {
}
