import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductDetailedComponent} from './catalog-list/product-detailed/product-detailed.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog-list/catalog.module').then(m => m.CatalogModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
