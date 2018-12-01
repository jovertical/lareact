import React from 'react';

import Dashboard from '../views/Dashboard';
import AdminList from '../views/admins/Index';
import ProductList from '../views/products/Index';

export default [
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '/admins',
        component: AdminList,
    },
    {
        path: '/products',
        component: ProductList,
    },
    {
        component: () => <h1>Page Not Found</h1>,
    },
];
