import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'browse',
        loadComponent: () => import('./browse/browse').then(m => m.Browse)
    },
    {
        path: 'contracts',
        loadComponent: () => import('./contracts/contracts').then(m => m.Contracts),
        children: [
            {
                path: 'all',
                loadComponent: () => import('./contracts/all/all').then(m => m.All)
            },
            {
                path: 'add',
                loadComponent: () => import('./contracts/add/add').then(m => m.Add)
            },
            {
                path: 'update',
                loadComponent: () => import('./contracts/update/update').then(m => m.Update)
            },
            {
                path: 'view',
                loadComponent: () => import('./contracts/view/view').then(m => m.View)
            },
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'investments',
        loadComponent: () => import('./investments/investments').then(m => m.Investments)
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin').then(m => m.Admin)
    },
    {
        path: 'signin',
        loadComponent: () => import('./signin/signin').then(m => m.Signin)
    },
    {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
    }
];
