import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CatalogListComponent} from './catalog-list/catalog-list.component';
import {ProductDetailedComponent} from './catalog-list/product-detailed/product-detailed.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogListComponent,
  },
  {
    path: 'products',
    component: ProductDetailedComponent
  },
  // {
  //   path: 'catalog',
  //   component: CatalogListComponent,
  //   children: [
  //     {path: 'product', component: ProductDetailedComponent},
  //   ]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
