import { Routes } from '@angular/router';
import HomeComponent from '../pages/Home/home.component';
import FamiliasComponent from '../pages/Familias/Components/familias.component';
import ProductComponent from '../pages/Productos/Components/product.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'Familias', component: FamiliasComponent},
    {path: 'Productos', component: ProductComponent},
    { path: '**', redirectTo: '' },
];
