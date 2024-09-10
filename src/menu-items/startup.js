// assets
import { IconUsers, IconUsersGroup } from '@tabler/icons-react';

// constant
const icons = {
    IconUsers,
    IconUsersGroup
};

// ==============================|| STARTUP MENU ITEMS ||============================== //

const startup = {
    id: 'startup',
    title: 'StartUp',
    type: 'group',
    children: [
        {
            id: 'equipe',
            title: 'Equipe',
            type: 'item',
            url: '/startup/team',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'cliente',
            title: 'Clientes',
            type: 'item',
            url: '/startup/clients',
            icon: icons.IconUsersGroup,
            breadcrumbs: false
        },

    ]
};

export default startup;
