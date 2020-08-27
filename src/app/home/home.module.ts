import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
