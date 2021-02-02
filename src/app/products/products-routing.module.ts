import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent   } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService        } from './services/products.service';
import { ProductService         } from './services/product.service';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: { data: ProductsService }
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: { data: ProductService }
  },
  {
    path: ':id/:handle',
    component: ProductDetailComponent,
    resolve: { data: ProductService }
  }
  /*{
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
