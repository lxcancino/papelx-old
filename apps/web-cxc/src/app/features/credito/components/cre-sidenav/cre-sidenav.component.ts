import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '@papelx/core';

@Component({
  selector: 'papelx-cre-sidenav',
  templateUrl: './cre-sidenav.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreSidenavComponent implements OnInit {
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
      name: 'cobros',
      label: 'Cobranza',
      description: 'Registro y aplicación de cobros',
      path: 'cobros'
    },
    {
      name: 'revision',
      label: 'Revisión',
      description: 'Control envio de revisiones y cobro',
      path: 'revision'
    },
    {
      name: 'devoluciones',
      label: 'Devoluciones',
      description: 'Notas de crédito de devolución',
      path: 'devoluciones'
    },
    {
      name: 'bonoficiaciones',
      label: 'Bonificaciones',
      description: 'Registro de notas de crédito por Bonificación y Descuento',
      path: 'bonificaciones'
    },
    {
      name: 'cargos',
      label: 'Notas de Cargo',
      description: 'Administración de notas de cargo',
      path: 'cargos'
    },
    {
      name: 'comisiones',
      label: 'Comisiones',
      description: 'Administración y calculo de comisiones a cobradores',
      path: 'comisiones'
    },
    {
      name: 'reportes',
      label: 'Reportes',
      collapsible: true,
      children: [
        {
          name: 'cobranza',
          label: 'Cobranza',
          description: 'Cobranza de Crédito',
          path: 'reporte/cobranza'
        }
      ]
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

  constructor() {}

  ngOnInit() {}
}
