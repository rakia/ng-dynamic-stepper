import { NgModule         } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule  } from '@ngx-translate/core';

import { StepsHeaderComponent    } from './components/steps-header/steps-header.component';
import { DynamicStepperComponent } from './index';
import { AngularMaterialModule   } from './shared/angular-material.module';

@NgModule({
  declarations: [
    DynamicStepperComponent,
    StepsHeaderComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    DynamicStepperComponent,
    StepsHeaderComponent
  ]
})
export class DynamicStepperModule { }
