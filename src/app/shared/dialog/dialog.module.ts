import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@external/material.module';

import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { DialogComponentInjectorDirective } from './directives/dialog-component-injector.directive';

@NgModule({
  declarations: [
    DialogComponent,
    DialogComponentInjectorDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DialogComponent
  ],
  providers: [DialogService]
})
export class DialogModule { }
