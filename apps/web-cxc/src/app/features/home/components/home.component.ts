import { Component } from '@angular/core';

import { BaseComponent } from '@papelx/core';

@Component({
  selector: 'papelx-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {
  constructor() {
    super();
  }
}
