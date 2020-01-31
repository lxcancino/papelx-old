import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { BaseComponent } from '@papelx/core';

@Component({
  selector: 'papelx-not-found',
  template: `
    <h1>Esta opción no esta disponible</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
