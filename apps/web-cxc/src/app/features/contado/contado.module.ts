import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CONTADO_COMPONENTS, ContadoPageComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ContadoPageComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...CONTADO_COMPONENTS]
})
export class ContadoModule {}
