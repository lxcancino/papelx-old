import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseComponent } from '@papelx/core';

export interface NavItem {
  name: string;
  label: string;
  description?: string;
  path?: string;
  children?: NavItem[];
  collapsible?: false;
}

@Component({
  selector: 'papelx-sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent extends BaseComponent {
  @Input() navigation: NavItem[] = [
    {
      name: 'cartera',
      label: 'Cartera',
      description: 'Cartera de Crédito',
      path: 'cartera'
    },
    {
      name: 'facturas',
      label: 'Facturas',
      description: 'Facturas',
      path: 'facturas'
    }
  ];
  constructor() {
    super();
  }

  ngOnInit() {}
}
