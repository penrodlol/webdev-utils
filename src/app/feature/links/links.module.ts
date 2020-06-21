import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { PipesModule } from '@shared/pipes/pipes.module';

import { LinksPageComponent } from './components/links-page/links-page.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LinkViewComponent } from './components/link-view/link-view.component';
import { LinksService } from './services/links.service';

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
    PipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [LinksService]
})
export class LinksModule { }
