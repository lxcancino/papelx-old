export interface NavItem {
  name: string;
  label: string;
  icon?: string;
  description?: string;
  path?: string;
  children?: NavItem[];
  collapsible?: boolean;
}
