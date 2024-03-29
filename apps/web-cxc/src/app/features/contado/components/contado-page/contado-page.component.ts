import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '@papelx/core';

@Component({
  selector: 'papelx-contado-page',
  templateUrl: './contado-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContadoPageComponent implements OnInit {
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
      name: 'devoluciones',
      label: 'Devoluciones',
      description: 'Notas de crédito de devolución',
      path: 'devoluciones'
    },
    {
      name: 'bonoficiaciones',
      label: 'Bonificaciones',
      description: 'Registro de notas de crédito por Bonificación y Descuento',
      path: 'devoluciones'
    },
    {
      name: 'bonificacionMejores',
      label: 'Bonificación MC',
      description: 'Administración de bonificaciones a mejores clientes',
      path: 'bonificacionesCuota'
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
          description: 'Cobranza de Crédito',
          path: 'reporte/cobranza'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
