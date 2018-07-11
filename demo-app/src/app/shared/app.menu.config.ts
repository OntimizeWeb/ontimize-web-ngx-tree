import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [{
      id: 'basic',
      name: 'BASIC',
      tooltip: 'BASIC_CONTENT',
      route: '/main/basic',
      icon: 'people'
    }, {
      id: 'nodes',
      name: 'NODES',
      tooltip: 'NODES_CONTENT',
      route: '/main/nodes',
      icon: 'people'
    }, {
      id: 'static',
      name: 'STATIC',
      tooltip: 'STATIC_CONTENT',
      route: '/main/static',
      icon: 'people'
    }, {
      id: 'detail',
      name: 'DETAIL',
      tooltip: 'DETAIL_CONTENT',
      route: '/main/detail',
      icon: 'people'
    }]
  },
  {
    id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  }
  // ,
  // { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
