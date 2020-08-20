import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { StoreModule } from '@ngrx/store';

import { LoadingModule } from '@shared/loading/loading.module';

import { JsonPrettyPageComponent } from './components/json-pretty-page/json-pretty-page.component';
import { JsonPrettyTreeComponent } from './components/json-pretty-tree/json-pretty-tree.component';
import { JsonPrettyActionsComponent } from './components/json-pretty-actions/json-pretty-actions.component';
import { JsonPrettyReducer } from './state/reducers';
import { metaReducers } from './state/metareducers';
import { EffectsModule } from '@ngrx/effects';
import { JsonPrettyEffects } from './state/effects/json-pretty.effects';
import { FromToolbarComponent } from './components/from-toolbar/from-toolbar.component';
import { ToToolbarComponent } from './components/to-toolbar/to-toolbar.component';
import { JsonPrettyResultComponent } from './components/json-pretty-result/json-pretty-result.component';

const routes: Routes = [
  { path: '', component: JsonPrettyPageComponent }
];

@NgModule({
  declarations: [
     JsonPrettyPageComponent,
     JsonPrettyTreeComponent,
     JsonPrettyActionsComponent,
     FromToolbarComponent,
     ToToolbarComponent,
     JsonPrettyResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTreeModule,
    ClipboardModule,
    MatTreeModule,
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(JsonPrettyReducer.key, JsonPrettyReducer.reducer, { metaReducers }),
    EffectsModule.forFeature([JsonPrettyEffects])
  ]
})
export class JsonPrettyModule { }
