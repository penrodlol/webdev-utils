import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { LinksPageComponent } from './components/links-page/links-page.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LinkViewComponent } from './components/link-view/link-view.component';

const routes: Routes = [
  { path: '', component: LinksPageComponent } 
]

@NgModule({
  declarations: [
    LinksPageComponent,
    LinksListComponent,
    LinkViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class LinksModule { }
