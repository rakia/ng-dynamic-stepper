import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';

import { AngularMaterialModule   } from '../shared/angular-material.module';
import { TimerComponent          } from './timer.component';

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [ TimerComponent ],
  providers: []
})
export class TimerModule {}
