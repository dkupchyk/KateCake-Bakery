import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {CatalogModule} from './catalog-list/catalog.module';
import { LoadingWidgetComponent } from './loading-widget/loading-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
