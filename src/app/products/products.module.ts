import { NgModule                } from '@angular/core';
import { RouterModule            } from '@angular/router';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';

import { DynamicStepperModule    } from '../../../projects/dynamic-stepper/src/lib/dynamic-stepper.module';
import { AngularMaterialModule   } from '../shared/angular-material.module';
import { ProductListComponent    } from './product-list/product-list.component';
import { ProductDetailComponent  } from './product-detail/product-detail.component';
import { ProductsService         } from './services/products.service';
import { ProductService          } from './services/product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    DynamicStepperModule,
    RouterModule
  ],
  providers: [
    ProductsService,
    ProductService
  ]
})
export class ProductsModule {}
