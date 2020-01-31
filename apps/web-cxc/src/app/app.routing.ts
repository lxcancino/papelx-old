// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';
import { NotFoundComponent } from '@papelx/web';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'credito',
    loadChildren: () =>
      import('./features/credito/credito.module').then(m => m.CreditoModule)
  },
  {
    path: 'contado',
    loadChildren: () =>
      import('./features/contado/contado.module').then(m => m.ContadoModule)
  },
  {
    path: 'cheques',
    loadChildren: () =>
      import('./features/cheques/cheques.module').then(m => m.ChequesModule)
  },
  {
    path: 'juridico',
    loadChildren: () =>
      import('./features/juridico/juridico.module').then(m => m.JuridicoModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
