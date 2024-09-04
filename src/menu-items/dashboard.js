// assets
import { IconServer, IconDatabase } from '@tabler/icons-react';

// constant
const icons = { IconServer,IconDatabase };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboards',
  type: 'group',
  children: [
    {
      id: 'dashboardserver',
      title: 'Servidor',
      type: 'item',
      url: '/dashboard/server',
      icon: icons.IconServer,
      breadcrumbs: false
    },
    {
      id: 'dashboarddb',
      title: 'Banco de Dados',
      type: 'item',
      url: '/dashboard/database',
      icon: icons.IconDatabase,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
