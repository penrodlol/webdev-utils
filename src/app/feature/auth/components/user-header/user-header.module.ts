import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { DialogModule } from '@shared/dialog/dialog.module';

import { UserHeaderComponent } from './user-header.component';

@NgModule({
  declarations: [UserHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DialogModule,
    FlexLayoutModule
  ],
  exports: [UserHeaderComponent]
})
export class UserHeaderModule { }
