import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {CatalogListComponent} from './catalog-list.component';
import {SharedModule} from '../shared/shared.module';
import {ProductDetailedComponent} from './product-detailed/product-detailed.component';
import {CategoriesService} from './categories.service';
import {ProductsService} from './product-detailed/products.service';

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
  providers: [CategoriesService, ProductsService],
})
export class CatalogModule {
}
