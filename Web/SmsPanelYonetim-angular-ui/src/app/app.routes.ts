import { Routes } from '@angular/router';
import { GirisGuard } from './guards/giris.guard';
export const routes: Routes = [
    {
        path: 'giris',
        loadComponent: () => import('./components/giris/giris.component').then(m => m.GirisComponent)
    },
    {
        path: '',
        loadComponent: () => import('./components/layouts/layouts.component').then(m => m.LayoutsComponent), // Use the layout component
        canActivate: [GirisGuard],
        children: [
            {
                path: '',
                redirectTo: 'anasayfa',
                pathMatch: 'full'
            },
            {
                path: 'anasayfa',
                loadComponent: () => import('./components/anasayfa/anasayfa.component').then(m => m.AnasayfaComponent),
                canActivate: [GirisGuard],
                data: { breadcrumb: 'Anasayfa' }
            },
           
        ]
    },
    { path: '**', redirectTo: 'giris' } // Olmayan yollar için yönlendirme
];
