import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { COMPONENTS, ChePageComponent } from './components';
import { NotFoundComponent } from '@papelx/web';

export const routes: Routes = [
  {
    path: '',
    component: ChePageComponent,
    children: [{ path: '**', component: NotFoundComponent }]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS]
})
export class ChequesModule {}
