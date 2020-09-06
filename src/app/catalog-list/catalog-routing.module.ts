import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CatalogListComponent} from './catalog-list.component';
import {ProductDetailedComponent} from './product-detailed/product-detailed.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CatalogListComponent
  },
  {
    path: 'products',
    component: ProductDetailedComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
