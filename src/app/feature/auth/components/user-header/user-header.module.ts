import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { DialogModule } from '@shared/dialog/dialog.module';

import { UserHeaderComponent } from './user-header.component';

@NgModule({
  declarations: [UserHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DialogModule,
    FlexLayoutModule
  ],
  exports: [UserHeaderComponent]
})
export class UserHeaderModule { }
