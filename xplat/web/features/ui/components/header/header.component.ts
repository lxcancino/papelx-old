import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BaseComponent } from '@papelx/core';

@Component({
  selector: 'papelx-header',
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent {
  @Input() navigation: any[] = [];
  constructor() {
    super();
  }
}
