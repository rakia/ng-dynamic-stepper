import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';

import { AngularMaterialModule   } from './shared/angular-material.module';
import { StepsHeaderComponent    } from './components/steps-header/steps-header.component';
import { DynamicStepperComponent } from './components/dynamic-stepper/dynamic-stepper.component';

@NgModule({
  declarations: [
    DynamicStepperComponent,
    StepsHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DynamicStepperComponent,
    StepsHeaderComponent
  ]
})
export class DynamicStepperModule { }
