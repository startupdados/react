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
        id: 'util-shadow',
        title: 'Moniteração',
        type: 'item',
        url: '/utils/util-shadow',
        icon: icons.IconEyeExclamation,
        breadcrumbs: false
      },
    {
      id: 'util-color',
      title: 'Preventivo',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconShieldHalfFilled,
      breadcrumbs: false
    },
   
  ]
};

export default monitoring;
