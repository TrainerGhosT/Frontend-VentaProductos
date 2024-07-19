import { Routes } from '@angular/router';
import HomeComponent from './pages/Home/home.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'Familias', loadChildren: () => import('./pages/Familias/Components/familias.component').then(m => m.FamiliasComponent)},
    { path: '**', redirectTo: '' },
];
