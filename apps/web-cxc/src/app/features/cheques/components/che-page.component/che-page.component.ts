import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent, NavItem } from '@papelx/core';

@Component({
  selector: 'papelx-che-page',
  templateUrl: 'che-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChePageComponent extends BaseComponent {
  navigation: NavItem[] = [
    {
      name: 'cartera',
      label: 'Cartera',
      icon: 'grid-view',
      description: 'Cartera de Crédito',
      path: 'cartera'
    },
    {
      name: 'cheques',
      label: 'Cheques',
      description: 'Cheques',
      path: 'cheques'
    },
    {
      name: 'cobros',
      label: 'Cobranza',
      description: 'Registro y aplicación de cobros',
      path: 'cobros'
    },

    {
      name: 'bonoficiaciones',
      label: 'Bonificaciones',
      description: 'Registro de notas de crédito por Bonificación y Descuento',
      path: 'devoluciones'
    },
    {
      name: 'cargos',
      label: 'Notas de Cargo',
      description: 'Administración de notas de cargo',
      path: 'cargos'
    },

    {
      name: 'reportes',
      label: 'Reportes',
      collapsible: true,
      children: [
        {
          name: 'cobranza',
          label: 'Cobranza',
          description: 'Cobranza de Cheques',
          path: 'reporte/cobranza/che'
        }
      ]
    }
  ];

  constructor() {
    super();
  }
}
