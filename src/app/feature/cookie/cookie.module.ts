import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePageComponent } from './components/cookie-page/cookie-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CookiePageComponent }
]

@NgModule({
  declarations: [CookiePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CookieModule { }
