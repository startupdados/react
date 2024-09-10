// src/routes/MainRoutes.js

import React from 'react';
import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from '../components/ProtectedRoute';


// Dashboard Pages
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const DashboardServer = Loadable(lazy(() => import('views/dashboard/server')))
const DashboardDatabase = Loadable(lazy(()=> import('views/dashboard/database')))

//
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

//Monitoring Pages
const ErrorPage = Loadable(lazy(() => import('views/erros')));
const PreventivePage = Loadable(lazy(() => import('views/preventive')))

// StartUp Pages
const TeamPage = Loadable(lazy(() => import('views/team')));
const ClientsPage = Loadable(lazy(() => import('views/clients')));
// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },


    // Dashboard pages
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'server',
          element: <DashboardServer />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'database',
          element: <DashboardDatabase />
        }
      ]
    },
    
    //Monitoração
    {
      path: 'monitoring',
      children: [
        {
          path: 'preventive',
          element: <PreventivePage />
        }
      ]
    },
    {
      path: 'monitoring',
      children: [
        {
          path: 'erros',
          element: <ErrorPage />
        }
      ]
    },

    {
      path: 'monitoring',
      children: [
        {
          path: 'preventive',
          element: <PreventivePage />
        }
      ]
    },

    //Startup 


    {
      path: 'startup',
      children: [
        {
          path: 'team',
          element: <TeamPage/>
        },
        {
          path: 'clients',
          element: <ClientsPage/>
        },
        // {
        //   path: 'clients',
        //   children: [
        //     {
        //       path: '/',
        //       element: <UtilsTypography />
              
        //     }
        //   ]
        // },
      ]
    },

   

    ///
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // }
  ]
};

export default MainRoutes;
