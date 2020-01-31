import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'papelx-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  headerNavigation: any[] = [
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
    }
  ];

  constructor() {}

  ngOnInit() {}
}
