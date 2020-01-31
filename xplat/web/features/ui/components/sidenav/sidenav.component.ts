import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseComponent, NavItem } from '@papelx/core';

@Component({
  selector: 'papelx-sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent extends BaseComponent {
  @Input() navigation: NavItem[] = [];
  @Input() defaultIcon = 'info-standard';
  constructor() {
    super();
  }

  ngOnInit() {}
}
