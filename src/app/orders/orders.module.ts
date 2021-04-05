import { NgModule                 } from '@angular/core';
import { BrowserModule            } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { FlexLayoutModule         } from '@angular/flex-layout';

import { DynamicStepperModule     } from '../../../projects/dynamic-stepper/src/lib/dynamic-stepper.module';
import { CustomAutocompleteModule } from '../../../projects/custom-autocomplete/src/lib/custom-autocomplete.module';
import { AngularMaterialModule    } from '../shared/angular-material.module';
import { OrderCreationComponent   } from './order-creation/order-creation.component';
import { CreateStep1Component     } from './create-step1/create-step1.component';
import { CreateStep2Component     } from './create-step2/create-step2.component';

@NgModule({
  declarations: [
    OrderCreationComponent,
    CreateStep1Component,
    CreateStep2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CustomAutocompleteModule,
    DynamicStepperModule
  ],
  providers: []
})
export class OrdersModule {}
