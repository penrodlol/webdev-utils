import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLanding },
    loadChildren: () => import('@feature/home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
