import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BaseComponent } from '@papelx/core';

@Component({
  selector: 'papelx-header',
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent {
  @Input() navigation: any[] = [
    {
      path: '/credito',
      label: 'Crédito',
      descripcion: 'Administración de la cartera de credito',
      icon: null,
      params: null
    },
    {
      path: '/contado',
      label: 'Contado',
      descripcion: 'Administración de la cartera de COD ',
      icon: null,
      params: null
    },
    {
      path: '/cheques',
      label: 'Cheques',
      descripcion: 'Administración de la cartera de cheques devueltos ',
      icon: null,
      params: null
    },
    {
      path: '/juridico',
      label: 'Jurídico',
      descripcion: 'Administración de la cartera de trámite jurídico ',
      icon: null,
      params: null
    }
  ];

  constructor() {
    super();
  }
}
