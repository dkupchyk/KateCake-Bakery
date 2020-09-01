import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {CatalogListComponent} from './catalog-list.component';
import {SharedModule} from '../shared/shared.module';
import {ProductsService} from './products.service';
import {ProductDetailedComponent} from './product-detailed/product-detailed.component';

@NgModule({
  declarations: [
    CatalogListComponent,
    ProductDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    CatalogListComponent,
    ProductDetailedComponent
  ],
  providers: [ProductsService],
})
export class CatalogModule {
}
