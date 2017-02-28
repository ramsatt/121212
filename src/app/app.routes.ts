import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


//pages
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        component: LoginComponent,
        path: ''
    },
    { path: 'admindsh', redirectTo: 'component-one', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });