import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule        } from '@angular/flex-layout';

import { AngularMaterialModule        } from './shared/angular-material.module';
import { ClickOutsideDirective        } from './directives/click-outside.directive';
import { OptionSearchOverlayComponent } from './components/option-search-overlay/option-search-overlay.component';
import { MatDynamicTableComponent     } from './components/mat-dynamic-table/mat-dynamic-table.component';
import { GetTotalPipe                 } from './pipes/get-total.pipe';

@NgModule({
  declarations: [
    OptionSearchOverlayComponent,
    MatDynamicTableComponent,
    ClickOutsideDirective,
    GetTotalPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [ OptionSearchOverlayComponent, MatDynamicTableComponent ]
})
export class CustomAutocompleteModule { }
