import { Routes } from '@angular/router';
import { GirisGuard } from './guards/giris.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/anasayfa/anasayfa.component').then(m => m.AnasayfaComponent)
    },
    {
        path: 'rezervasyon',
        loadComponent: () => import('./components/rezervasyon/rezervasyon.component').then(m => m.RezervasyonComponent)
    },
    {
        path: 'yonetim/giris',
        loadComponent: () => import('./components/giris/giris.component').then(m => m.GirisComponent)
    },
    {
        path: 'yonetim',
        loadComponent: () => import('./components/layouts/layouts.component').then(m => m.LayoutsComponent),
        canActivate: [GirisGuard],
        children: [
            {
                path: '',
                redirectTo: 'oda-gecmisi',
                pathMatch: 'full'
            },
            {
                path: 'oda-gecmisi',
                loadComponent: () => import('./components/oda-gecmisi/oda-gecmisi.component').then(m => m.OdaGecmisiComponent),
                data: { breadcrumb: 'Oda Geçmişi' }
            }
        ]
    },
    { path: '**', redirectTo: '' }
];