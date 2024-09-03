// project imports
// src/routes/AuthenticationRoutes.js

import React from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { isAuthenticated } from '../utils/auth';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: isAuthenticated() ? <Navigate to="/" replace /> : <AuthLogin3 />
    },
    {
      path: '/register',
      element: isAuthenticated() ? <Navigate to="/" replace /> : <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
