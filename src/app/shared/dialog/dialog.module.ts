import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@external/material.module';

import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { DialogComponentInjectorDirective } from './directives/dialog-component-injector/dialog-component-injector.directive';
import { SubmitDialogOnEnterDirective } from './directives/submit-dialog-on-enter/submit-dialog-on-enter.directive';

@NgModule({
  declarations: [
    DialogComponent,
    DialogComponentInjectorDirective,
    SubmitDialogOnEnterDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DialogComponent,
    DialogComponentInjectorDirective
  ],
  providers: [DialogService]
})
export class DialogModule { }
