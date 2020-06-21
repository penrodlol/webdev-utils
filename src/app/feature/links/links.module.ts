import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { PipesModule } from '@shared/pipes/pipes.module';
import { DialogModule } from '@shared/dialog/dialog.module';

import { LinksPageComponent } from './components/links-page/links-page.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LinkViewComponent } from './components/link-view/link-view.component';
import { LinksService } from './services/links.service';
import { LinksConfigurationComponent } from './components/links-configuration/links-configuration.component';

const routes: Routes = [
  { path: '', component: LinksPageComponent } 
]

@NgModule({
  declarations: [
    LinksPageComponent,
    LinksListComponent,
    LinkViewComponent,
    LinksConfigurationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [LinksService]
})
export class LinksModule { }
