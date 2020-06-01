import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './user-header.component';
import { MaterialModule } from 'src/app/material.module';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';



@NgModule({
  declarations: [UserHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DialogModule
  ],
  exports: [UserHeaderComponent]
})
export class UserHeaderModule { }
