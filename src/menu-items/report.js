// assets
import {  IconClipboardData,IconReportAnalytics } from '@tabler/icons-react';

// constant
const icons = {
    IconClipboardData,
    IconReportAnalytics
};

// ==============================|| REPORT MENU ITEMS ||============================== //

const reports = {
  id: 'reports',
  title: 'Relatórios',
  type: 'group',
  children: [
    {
        id: 'dbreport',
        title: 'Banco de Dados',
        type: 'item',
        url: '/utils/util-shadow',
        icon: icons.IconClipboardData,
        breadcrumbs: false
      },
    {
      id: 'osreport',
      title: 'Sistema Operacional',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconReportAnalytics,
      breadcrumbs: false
    },
   
  ]
};

export default reports;
