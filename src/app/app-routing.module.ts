import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProductCreationComponent } from './products/product-creation/product-creation.component';
import { ProductListComponent     } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-products', pathMatch: 'full' },
  { path: 'create-products',
    component: ProductCreationComponent
  },
  { path: 'products',
    component: ProductListComponent
    // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
