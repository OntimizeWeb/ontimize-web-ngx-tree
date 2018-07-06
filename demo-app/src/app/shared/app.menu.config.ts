import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [{
      id: 'customersTree',
      name: 'CUSTOMERS_TREE',
      tooltip: 'CUSTOMERS_TREE_CONTENT',
      route: '/main/customersTree',
      icon: 'people',
      'show-in-card-menu': false
    }]
  },
  {
    id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
