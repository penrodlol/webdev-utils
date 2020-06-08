import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('@feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
    loadChildren: () => import('@feature/home/home.module').then(m => m.HomeModule),
  }, 
  {
    path: 'cookie',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
    loadChildren: () => import('@feature/cookie/cookie.module').then(m => m.CookieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
