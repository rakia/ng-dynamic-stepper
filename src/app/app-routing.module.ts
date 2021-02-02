import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { OrderCreationComponent } from './orders/order-creation/order-creation.component';
import { ProductListComponent   } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'     },
  { path: 'products',     component: ProductListComponent   },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'orders/new',   component: OrderCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
