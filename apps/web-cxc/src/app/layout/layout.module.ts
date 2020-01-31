import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../features/shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { throwIfAlreadyLoaded } from '@papelx/utils';

@NgModule({
  declarations: [MainPageComponent],
  imports: [SharedModule],
  exports: [MainPageComponent]
})
export class LayoutModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LayoutModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'LayoutModule');
  }
}
