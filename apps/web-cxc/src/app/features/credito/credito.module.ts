import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CREDITO_COMPONENTS, CreditoPageComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: CreditoPageComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...CREDITO_COMPONENTS],
  exports: [...CREDITO_COMPONENTS]
})
export class CreditoModule {}
