import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/reducers';
import { metaReducers } from './shared/metareducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
