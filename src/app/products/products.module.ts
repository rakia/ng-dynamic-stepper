import { NgModule                } from '@angular/core';
import { RouterModule            } from '@angular/router';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';
import { HttpClientModule        } from '@angular/common/http';

import { DynamicStepperModule     } from '../../../projects/dynamic-stepper/src/lib/dynamic-stepper.module';
import { AngularMaterialModule    } from '../shared/angular-material.module';
import { ProductListComponent     } from './product-list/product-list.component';
import { ProductDetailComponent   } from './product-detail/product-detail.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { CreateStep1Component     } from './create-step1/create-step1.component';
import { CreateStep2Component     } from './create-step2/create-step2.component';
import { ProductsService          } from './services/products.service';
import { ProductService           } from './services/product.service';

@NgModule({
  declarations: [
    ProductCreationComponent,
    CreateStep1Component,
    CreateStep2Component,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    DynamicStepperModule,
    RouterModule
  ],
  providers: [
    ProductsService,
    ProductService
  ]
})
export class ProductsModule {}
