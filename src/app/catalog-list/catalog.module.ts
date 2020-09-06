import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogListComponent} from './catalog-list.component';
import {CatalogRoutingModule} from './catalog-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ProductDetailedComponent} from './product-detailed/product-detailed.component';

@NgModule({
  declarations: [
    CatalogListComponent,
    ProductDetailedComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
  ],
  exports: [
    CatalogListComponent,
    ProductDetailedComponent
  ],
  providers: [],
})
export class CatalogModule {
}
