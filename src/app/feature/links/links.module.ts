import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { DialogModule } from '@shared/dialog/dialog.module';
import { AutoFocusModule } from '@shared/auto-focus/auto-focus.directive';

import { LinksPageComponent } from './components/links-page/links-page.component';
import { LinksService } from './services/links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientSideLinksComponent } from './components/client-side-links/client-side-links.component';
import { ServerSideLinksComponent } from './components/server-side-links/server-side-links.component';
import { MiscLinksComponent } from './components/misc-links/misc-links.component';
import { LinksToolbarComponent } from './components/links-toolbar/links-toolbar.component';
import { HideLinksComponent } from './components/hide-links/hide-links.component';
import { AddEditLinkComponent } from './components/add-edit-link/add-edit-link.component';
import { LinksHeaderComponent } from './components/links-header/links-header.component';
import { LinkDeletionWarningComponent } from './components/link-deletion-warning/link-deletion-warning.component';
import { LinksConfigurationComponent } from './components/links-configuration/links-configuration.component';
import { LinkSearchComponent } from './components/link-search/link-search.component';

const routes: Routes = [
  { path: '', component: LinksPageComponent }
];

@NgModule({
  declarations: [
    LinksPageComponent,
    ClientSideLinksComponent,
    ServerSideLinksComponent,
    MiscLinksComponent,
    LinksToolbarComponent,
    HideLinksComponent,
    AddEditLinkComponent,
    LinksHeaderComponent,
    LinkDeletionWarningComponent,
    LinksConfigurationComponent,
    LinkSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DialogModule,
    ReactiveFormsModule,
    AutoFocusModule,
    RouterModule.forChild(routes)
  ],
  providers: [LinksService]
})
export class LinksModule { }
