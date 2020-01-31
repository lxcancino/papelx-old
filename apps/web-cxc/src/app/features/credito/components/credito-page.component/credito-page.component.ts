import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent, NavItem } from '@papelx/core';

@Component({
  selector: 'papelx-credito-page',
  templateUrl: 'credito-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditoPageComponent extends BaseComponent {
  navigation: NavItem[] = [
    {
      name: 'cartera',
      label: 'Cartera',
      icon: 'grid-view',
      description: 'Cartera de Crédito',
      path: 'cartera'
    },
    {
      name: 'facturas',
      label: 'Facturas',
      description: 'Facturas',
      path: 'facturas'
    },
    {
      name: 'catalogos',
      label: 'Catálogos',
      collapsible: true,
      children: [
        {
          name: 'operadores',
          label: 'Operadores',
          path: 'operadores',
          icon: 'users'
        },
        {
          name: 'cobradores',
          label: 'Cobradores',
          path: 'cobradores',
          icon: 'info-circle'
        },
        {
          name: 'vendedores',
          label: 'Vendedores',
          path: 'vendedores',
          icon: 'shopping-cart'
        },
        { name: 'abogados', label: 'Abogados', path: 'abogados', icon: 'book' }
      ]
    }
  ];

  constructor() {
    super();
  }
}
