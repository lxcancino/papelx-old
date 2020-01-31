import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@papelx/core';

@Component({
  selector: 'papelx-credito-page',
  templateUrl: 'credito-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditoPageComponent extends BaseComponent {
  headerNavigation: any[] = [
    {
      path: '/credito',
      label: 'Crédito',
      descripcion: 'Administración de la cartera de credito',
      icon: null,
      params: null
    }
  ];
  constructor() {
    super();
  }
}
