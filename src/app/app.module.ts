import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import {ProductsService} from './catalog-list/products.service';
import { ProductDetailedComponent } from './catalog-list/product-detailed/product-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogListComponent,
    ProductDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
