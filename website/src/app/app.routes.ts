import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'contracts',
        loadComponent: () => import('./contracts/contracts').then(m => m.Contracts)
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
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
