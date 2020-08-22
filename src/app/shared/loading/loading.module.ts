import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';

import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
