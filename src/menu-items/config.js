// assets
import { IconComponents,IconBrandGoogleBigQuery,IconVariable,IconTableOptions} from '@tabler/icons-react';

// constant
const icons = {
    IconComponents,
    IconBrandGoogleBigQuery,
    IconVariable,
    IconTableOptions
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const config = {
    id: 'config',
    title: 'Configurações',
    type: 'group',
    children: [
        {
            id: 'queries',
            title: 'Queries',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconBrandGoogleBigQuery,
            breadcrumbs: false
        },
        {
            id: 'widgets',
            title: 'Widgets',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconComponents,
            breadcrumbs: false
        },
        {
            id: 'variables',
            title: 'Variaveis',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconVariable,
            breadcrumbs: false
        },
        {
            id: 'pagesConfig',
            title: 'Config Paginas',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconTableOptions,
            breadcrumbs: false
        },

    ]
};

export default config;
