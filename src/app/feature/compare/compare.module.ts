import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComparePageComponent } from './components/compare-page/compare-page.component';
import { ComparePanelsComponent } from './components/compare-panels/compare-panels.component';
import { CompareTableComponent } from './components/compare-table/compare-table.component';

const routes: Routes = [
  { path: '', component: ComparePageComponent }
];

@NgModule({
  declarations: [
    ComparePageComponent,
    ComparePanelsComponent,
    CompareTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class CompareModule { }
