import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { PipesModule } from '@shared/pipes/pipes.module';
import { DialogModule } from '@shared/dialog/dialog.module';

import { LinksPageComponent } from './components/links-page/links-page.component';
import { LinksService } from './services/links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientSideLinksComponent } from './components/client-side-links/client-side-links.component';
import { ServerSideLinksComponent } from './components/server-side-links/server-side-links.component';
import { MiscLinksComponent } from './components/misc-links/misc-links.component';
import { LinksToolbarComponent } from './components/links-toolbar/links-toolbar.component';
import { HideLinksComponent } from './components/hide-links/hide-links.component';

const routes: Routes = [
  { path: '', component: LinksPageComponent } 
]

@NgModule({
  declarations: [
    LinksPageComponent,
    ClientSideLinksComponent,
    ServerSideLinksComponent,
    MiscLinksComponent,
    LinksToolbarComponent,
    HideLinksComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [LinksService]
})
export class LinksModule { }
