// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';
import { MainPageComponent } from './layout/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
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
      }
    ]
    // redirectTo: '/home',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
