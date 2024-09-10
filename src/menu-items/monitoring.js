// assets
import {  IconShieldHalfFilled,IconEyeExclamation } from '@tabler/icons-react';

// constant
const icons = {
  IconShieldHalfFilled,
  IconEyeExclamation
};

// ==============================|| MONITORING MENU ITEMS ||============================== //

const monitoring = {
  id: 'monitoring',
  title: 'Monitoração',
  type: 'group',
  children: [
    {
        id: 'erros',
        title: 'Erros',
        type: 'item',
        url: '/monitoring/erros',
        icon: icons.IconEyeExclamation,
        breadcrumbs: false
      },
    {
      id: 'preventive',
      title: 'Preventivo',
      type: 'item',
      url: '/monitoring/preventive',
      icon: icons.IconShieldHalfFilled,
      breadcrumbs: false
    },
   
  ]
};

export default monitoring;
