import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@papelx/web';

@Component({
  selector: 'papelx-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
