import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';

import { AngularMaterialModule   } from './shared/angular-material.module';
import { StepsHeaderComponent    } from './components/steps-header/steps-header.component';
import { DynamicStepperComponent } from './components/dynamic-stepper/dynamic-stepper.component';
import { HandGestureService      } from './ml/hand-gesture.service';

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
  ],
  providers: [ HandGestureService ]
})
export class DynamicStepperModule { }
