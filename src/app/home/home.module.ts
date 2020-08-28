import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AboutKateComponent } from './about-kate/about-kate.component';
import { AssortmentComponent } from './assortment/assortment.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AboutKateComponent,
    AssortmentComponent
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
